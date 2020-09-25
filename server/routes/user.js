const express = require('express');

const userController = require('../controllers/userController');
const { route } = require('./project');

const router = express.Router();

router.get('/',
  userController.getUser,
  (req, res) => res.status(200).json(res.locals.user)
);

router.get('/all',
  userController.getUsers,
  (req, res) => res.status(200).json(res.locals.users)
)

router.delete('/all',
  userController.dropUsers,
  (req, res) => res.status(200).json('All Users Deleted.')
)

module.exports = router;
