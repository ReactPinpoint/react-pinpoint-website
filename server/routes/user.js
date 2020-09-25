const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/',
  userController.getUser,
  (req, res) => res.status(200).json(res.locals.user)
);

router.get('/all',
  userController.getUsers,
  (req, res) => res.status(200).json(res.locals.users)
)

module.exports = router;
