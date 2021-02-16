const db = require('../database');

async function selectFromBarbecue(id) {
  const connection = await db();
  let [rows] = await connection.query('SELECT * FROM barbecue_members WHERE barbecue_id=? AND need_drink=? ORDER BY name ASC', [id, true]);
  const withDrink = rows;
  [rows] = await connection.query('SELECT * FROM barbecue_members WHERE barbecue_id=? AND need_drink=? ORDER BY name ASC', [id, false]);
  const noDrink = rows;
  return [withDrink, noDrink];
}

async function select(id = 0) {
  const connection = await db();
  if (id) {
    const [rows] = await connection.query('SELECT * FROM barbecue_members WHERE id=? ', [id]);
    return rows;
  }
  const [rows] = await connection.query('SELECT * FROM barbecue_members ORDER BY name ASC');
  return rows;
}

async function insert(barbecue) {
  const connection = await db();
  const sql = 'INSERT INTO barbecue_members(barbecue_id, name, budget, need_drink, paid) VALUES (?,?,?,?,?);';
  const values = [
    barbecue.barbecue_id,
    barbecue.name,
    barbecue.budget,
    barbecue.need_drink,
    barbecue.paid];
  return connection.query(sql, values);
}

async function update(id, barbecue) {
  const connection = await db();
  const sql = 'UPDATE barbecue_members SET barbecue_id=?, name=?, budget=?, need_drink=?, paid=? WHERE id=?';
  const values = [
    barbecue.barbecue_id,
    barbecue.name,
    barbecue.budget,
    barbecue.need_drink,
    barbecue.paid,
    id];
  return connection.query(sql, values);
}

async function updatePaid(id, barbecue) {
  const connection = await db();
  const sql = 'UPDATE barbecue_members SET paid=? WHERE id=?';
  const values = [
    barbecue.paid,
    id];
  return connection.query(sql, values);
}

async function remove(id) {
  const connection = await db();
  const sql = 'DELETE FROM barbecue_members WHERE id=?';
  return connection.query(sql, [id]);
}

module.exports = {
  selectFromBarbecue, select, insert, update, updatePaid, remove,
};
