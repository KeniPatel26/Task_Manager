const Task = require('../models/task');

// @desc Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// @desc Add task
exports.addTask = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ message: 'Title is required' });

  const task = await Task.create({ title });
  res.status(201).json(task);
};

// @desc Toggle task completion
exports.toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.completed = !task.completed;
  await task.save();

  res.json(task);
};

// @desc Delete task
exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) return res.status(404).json({ message: 'Task not found' });

  res.json({ success: true, message: 'Task deleted' });
};
