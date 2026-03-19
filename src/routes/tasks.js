const express = require('express');
const { formatResponse } = require('../utils/helpers');

const router = express.Router();

const VALID_STATUSES = ['pending', 'in_progress', 'done'];

const tasks = [];
let nextId = 1;

router.get('/', (req, res) => {
  const { status } = req.query;
  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`, status: 400 });
  }
  const filtered = status ? tasks.filter((t) => t.status === status) : tasks;
  res.json(formatResponse(filtered));
});

router.post('/', (req, res) => {
  try {
    const { title, assignee } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required', status: 400 });
    }
    const task = {
      id: nextId++,
      title,
      assignee: assignee || null,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    tasks.push(task);
    res.status(201).json(formatResponse(task));
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', status: 500 });
  }
});

router.patch('/:id', (req, res) => {
  try {
    const task = tasks.find((t) => t.id === Number(req.params.id));
    if (!task) {
      return res.status(404).json({ error: 'Task not found', status: 404 });
    }
    const { status, title } = req.body;
    if (status && !VALID_STATUSES.includes(status)) {
      return res.status(400).json({ error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`, status: 400 });
    }
    if (status) task.status = status;
    if (title) task.title = title;
    res.json(formatResponse(task));
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', status: 500 });
  }
});

module.exports = router;
