const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/getproject',
  projectController.getProject,
  (req, res) => res.status(200).json({})
);

router.post('/addproject',
  projectController.addProject,
  (req, res) => res.status(200).json({})
);

router.put('/updateproject',
  projectController.updateProject,
  (req, res) => res.status(200).json({})
);

module.exports = router;
