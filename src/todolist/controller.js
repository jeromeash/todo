const { result } = require('lodash');
const pool = require('../../db');
const queries = require('./queries');   

const getTodoLists = (req, res) =>{
    pool.query(queries.getTodoLists, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTodolistById = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query("queries.getTodolistById", [id] ,(error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addTodolist = (req, res)=>{
    const {item}= req.body;
    //check item exist
    pool.query(queries.checkTodolistExists, [item], (error,results) =>{
        if (results.row.length){
            res.send("item already exists.");
        }
        //add item to DB
        pool.query(
            queries.addTodolist,
            [item],
            (error, results)=>{
                if (error) throw error;
                res.status(201).send("list added successfully!");
            });
    });
};
    const removeTodolist = (req, res) =>{
        const id = parseInt(req.params.id);
        //check to make sure item exist in db

        pool.query(queries.getTodolistById, [id], (error, results)=>
        {
            const noItemFound = !results.row.length;
            if(noItemFound){
                res.send("no item found");
            }
                pool.query(queries.removeTodolist, [id], (error, results)=>{
                    if (error)throw error;
                    res.status(201).send("student removed successfully");
                });
        });


    };

    const  updateTodolist = (req, res)=>{
        const id =parseInt(req.params.id);
        const {item} = req.body;
        
        pool.query(queries.getTodolistById, [id], (error, results)=>
        {
            const noItemFound = !results.row.length;
            if(noItemFound){
                res.send("no item was found");
            }

            pool.query(queries.updateTodolist, [item, id], (error, result)=>{
                if (error) throw error;
                res.status(201).send("items was update successfully");
            });
            });

    };

module.exports ={
    getTodoLists,
    getTodolistById,
    addTodolist,
    removeTodolist,
    updateTodolist,
};