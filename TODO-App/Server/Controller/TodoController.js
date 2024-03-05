//? CRUD Operations

const todoModel = require("../Model/TodoModel");

const createTodo = async (req) => {
  try {
    const { title, content } = req.body;
    const newTodo = new todoModel({
      title: title,
      content: content,
      isCompleted: false,
    });
    const saveTodo = newTodo.save();
    return saveTodo;
  } catch (error) {
    console.error(`${error} : Error While Create Todo ${error.message}`);
  }
};

const getAllTodo = async () => {
  try {
    const allTodo = await todoModel.find();
    return allTodo;
  } catch (error) {
    console.error(`Error While Fetching Todo ${error.message}`);
  }
};

const getTodoById = async (req) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findById(id);
    return todo;
  } catch (error) {
    console.error(`Error While Getting Todo ${error.message}`);
  }
};

const updateTodo = async (req) => {
  try {
    const { id } = req.params;
    const { title, content, isCompleted } = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      {
        title,
        content,
        isCompleted,
      },
      { new: true }
    );
    return updatedTodo;
  } catch (error) {
    console.error(`Error While Updating Todo ${error.message}`);
  }
};

const deleteTodo = (req) => {
  try {
    const { id } = req.params;
    const removedTodo = todoModel.findByIdAndDelete(id);
    return removedTodo;
  } catch (error) {
    console.error(`Error While Deleting Todo ${error.message}`);
  }
};

module.exports = {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
