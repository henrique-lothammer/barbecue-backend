const { Router } = require('express');
const BarbecueMember = require('../models/barbecue_member');

const barbecueRouter = Router();

barbecueRouter.get('/members', async (request, response) => {
  try {
    const membersList = await BarbecueMember.select();
    return response.json(membersList);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.get('/members/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const member = await BarbecueMember.select(id);
    return response.json(...member);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.get('/:id/members', async (request, response) => {
  try {
    const { id } = request.params;
    const membersList = await BarbecueMember.selectFromBarbecue(id);
    console.log(membersList);
    return response.json(membersList);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.post('/:id/members', async (request, response) => {
  try {
    const data = request.body;
    const [{ insertId }] = await BarbecueMember.insert(data);
    return response.json({ id: insertId, ...data });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.put('/members/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    await BarbecueMember.update(id, data);
    return response.json({ id, ...data });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.put('/members/:id/paid', async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    await BarbecueMember.updatePaid(id, data);
    return response.json({ id, ...data });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

barbecueRouter.delete('/members/:id', async (request, response) => {
  try {
    const { id } = request.params;
    await BarbecueMember.remove(id);
    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

module.exports = barbecueRouter;
