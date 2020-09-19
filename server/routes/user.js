const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/getuser',
  userController.getUser,
  (req, res) => res.status(200).json({})
);

router.post('/adduser', 
  userController.addUser,
  (req, res) => res.status(200).json({})
);

module.exports = router;
