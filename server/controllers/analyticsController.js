const analyticsController = {};

analyticsController.getAnalytics = async (req, res, next) => {
  try {
    //TODO write logic to fetch analytics from DB
    next();
  } catch (err) {
    next(err);
  }
}

analyticsController.addAnalytics = async (req, res, next) => {
  try {
    //TODO write logic to post analytics to DB
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = analyticsController;
