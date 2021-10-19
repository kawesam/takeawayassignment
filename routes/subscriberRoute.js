const router = require('express');

const baseRoute = router();

const subscriberRouter = router();

const subscriberController = require('../controllers/subscriberController');

subscriberRouter.post("*", subscriberController.subscribe);

baseRoute.use("/", subscriberRouter);

module.exports = baseRoute;



