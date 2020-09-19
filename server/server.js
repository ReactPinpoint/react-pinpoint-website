const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

const userRouter = require('./routes/user');
const projectRouter = require('./routes/project');
const analyticsRouter = require('./routes/analytics');
app.use('/api/user', userRouter);
app.use('/api/project', projectRouter);
app.use('/api/analytics', analyticsRouter);


if (process.env.NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.send('Welcome to reactpp API');
  });
}
else if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV)
  app.use(express.static(path.join(__dirname, '../out')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../out/index.html'));
  });
}

// global error handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(err);
    console.log('Error:', err);
  }
  return res.status(400).json(err);
});

// run the server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})
