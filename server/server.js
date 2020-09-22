const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const isAuthorized = require('./auth/auth');

app.use(express.json({ extended: false }));
app.use(session({ secret: process.env.SECRET }))
app.use(passport.initialize());
app.use(passport.session());

const userRouter = require('./routes/user');
const projectRouter = require('./routes/project');
const analyticsRouter = require('./routes/analytics');
const { addHook } = require('./sequelize/models/user');
app.use('/api/user', userRouter);
app.use('/api/project', projectRouter);
app.use('/api/analytics', analyticsRouter);

app.get('/', 
  isAuthorized,
  (req, res) => {
  res.send('Welcome to reactpp API');
});

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
