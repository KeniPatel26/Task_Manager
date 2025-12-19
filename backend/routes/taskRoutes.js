const express = require('express');
const {
  getTasks,
  addTask,
  toggleTask,
  deleteTask
} = require('../controller/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.patch('/:id', toggleTask);
router.delete('/:id', deleteTask);

module.exports = router;
