const { Router } = require('express');

const barbecueRouter = require('./barbecues');
const barbecueMemberRouter = require('./barbecue_members');

const routes = Router();

routes.use('/barbecues', barbecueRouter);
routes.use('/barbecue', barbecueMemberRouter);

module.exports = routes;
