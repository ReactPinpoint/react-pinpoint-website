const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/getuser/:username',
  userController.getUser,
  (req, res) => res.status(200).json(res.locals.user)
);

router.post('/adduser', 
  userController.addUser,
  (req, res) => res.status(200).json(res.locals.createdUser)
);

router.put('/updateuser',
  userController.deleteUser,
  (req, res) => res.status(200).json({})
);

router.delete('/deleteuser',
  userController.deleteUser,
  (req, res) => res.status(200).json({})
);

module.exports = router;
