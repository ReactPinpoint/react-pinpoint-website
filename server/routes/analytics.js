const express = require('express');
const analyticsController = require('../controllers/analyticsController');

const router = express.Router();

router.get('/getanalytics', 
  analyticsController.getAnalytics,
  (req, res) => res.status(200).json({})
);

router.get('/addanalytics', 
  analyticsController.addAnalytics,
  (req, res) => res.status(200).json({})
);

module.exports = router;
