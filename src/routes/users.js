const express = require('express');
const { validateEmail, formatResponse } = require('../utils/helpers');

const router = express.Router();

const users = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(formatResponse(users));
});

router.get('/:id', (req, res) => {
  try {
    const user = users.find((u) => u.id === Number(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found', status: 404 });
    }
    res.json(formatResponse(user));
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', status: 500 });
  }
});

router.post('/', (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required', status: 400 });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format', status: 400 });
    }
    const user = { id: nextId++, name, email, createdAt: new Date().toISOString() };
    users.push(user);
    res.status(201).json(formatResponse(user));
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', status: 500 });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const index = users.findIndex((u) => u.id === Number(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'User not found', status: 404 });
    }
    users.splice(index, 1);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', status: 500 });
  }
});

module.exports = router;
