const getTodoLists = " SELECT * FROM todo";
const getTodolistById = " SELECT * FROM todo WHERE id = $1";
const checkTodolistExists = "SELECT i FROM todo i WHERE i.item =$1";
const addTodolist ="INSERT INTO students (item) VALUES ($1)";
const removeTodolist ="DELETE FROM todo WHERE id = $1";
const updateTodolist ="UPDATE todo SET name = $1 WHERE id = $2";

module.exports ={
    getTodoLists,
    getTodolistById,
    checkTodolistExists,
    addTodolist,
    removeTodolist,
    updateTodolist,
};