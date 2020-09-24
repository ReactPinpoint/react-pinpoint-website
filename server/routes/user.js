const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/getuser/:username',
  userController.getUser,
  (req, res) => res.status(200).json(res.locals.user)
);

router.post('/register', 
  userController.register,
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

router.post('/login', 
  userController.login,
  (req, res) => res.status(200).json(res.locals.loggedIn)
)

module.exports = router;
