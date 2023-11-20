const { Router } =require("express");
const controller = require("./controller");

const router = Router();

router.get ("/", controller.getTodoLists);
router.post ("/", controller.addTodolist);
router.get ("/:id", controller.getTodolistById);
router.put ("/:id", controller.updateTodolist);
router.delete("/:id", controller.removeTodolist);


module.exports = router;