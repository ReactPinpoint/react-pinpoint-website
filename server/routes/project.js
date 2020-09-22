const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/getproject',
  projectController.getProject,
  (req, res) => res.status(200).json(res.locals.project)
);

router.post('/addproject',
  projectController.addProject,
  (req, res) => res.status(200).json(res.locals.createdProject)
);

router.put('/updateproject',
  projectController.updateProject,
  (req, res) => res.status(200).json({})
);

router.delete('/deleteproject',
  projectController.deleteProject,
  (req, res) => res.status(200).json({})
);

module.exports = router;
