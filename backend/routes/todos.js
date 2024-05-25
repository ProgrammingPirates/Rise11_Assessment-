const express = require('express');
const Todo = require('../models/Todo');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get Todos
router.get('/', authMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create Todo
router.post('/', authMiddleware, async (req, res) => {
  const { task } = req.body;
  try {
    const newTodo = new Todo({
      userId: req.user.id,
      task,
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update Todo
router.put('/:id', authMiddleware, async (req, res) => {
  const { task, completed } = req.body;
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: 'Todo not found' });

    if (todo.userId.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: { task, completed } },
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete Todo
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: 'Todo not found' });

    if (todo.userId.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    await Todo.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
