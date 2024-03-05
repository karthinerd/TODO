const express = require("express");

const router = express.Router();

const {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../Controller/TodoController");

router.post("/createTodo", async (req, res) => {
  try {
    const todoData = await createTodo(req);
    res.status(201).json(todoData);
  } catch (error) {
    console.error(`Failed To Create Todo ${error}`);
    res.status(500).json({ error: error.message });
  }
});

router.get("/getTodo", async (req, res) => {
  try {
    const allTodo = await getAllTodo();
    res.status(200).json({ allTodo });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error in Fetching Data", Error: error.message });
  }
});

router.get("/getTodoId/:id", async (req, res) => {
  try {
    const todo = await getTodoById(req);
    res.status(200).json({ todo });
  } catch (error) {
    res.status(400).json({ message: { error } });
  }
});

router.put("/updateTodo/:id", async (req, res) => {
  try {
    const updatedTodo = await updateTodo(req);
    res.status(201).json({ message: "Updated Successfully", updatedTodo });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Can't Update the Todo", error: error.message });
  }
});

router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const deletedTodo = await deleteTodo(req);
    res.status(200).json({ message: "Todo Deleted", removed: deletedTodo });
  } catch (error) {
    res.status(400).json({ message: "Todo Not Deleted", error: error.message });
  }
});

module.exports = router;
