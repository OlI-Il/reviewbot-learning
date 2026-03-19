const express = require('express');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'ReviewBot API', version: '1.0.0' });
});

app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

