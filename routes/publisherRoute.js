const router = require('express');

const baseRoute = router();

const publisherRouter = router();

const publisherController = require('../controllers/publisherController');

publisherRouter.post("*", publisherController.publish);

baseRoute.use("/", publisherRouter);

module.exports = baseRoute;



