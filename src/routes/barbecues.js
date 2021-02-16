const { Router } = require('express');
const Barbecue = require('../models/barbecue');

const barbecueRouter = Router();

barbecueRouter.get('/', async (request, response) => {
  try {
    const barbecuesList = await Barbecue.select();
    return response.json(barbecuesList);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const barbecuesList = await Barbecue.select(id);
    return response.json(...barbecuesList);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.post('/', async (request, response) => {
  try {
    const data = request.body;
    const [{ insertId }] = await Barbecue.insert(data);
    return response.json({ id: insertId, ...data });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    await Barbecue.update(id, data);
    return response.json({ id, ...data });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    await Barbecue.remove(id);
    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

module.exports = barbecueRouter;
