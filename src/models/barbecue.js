const db = require('../database');

async function select(id = 0) {
  const connection = await db();
  if (id) {
    const [rows] = await connection.query(
      'SELECT barbecues.id, title, date, suggested_budget, suggested_budget_no_drink, description, notes,'
    + ' Count(barbecue_members.name) as members, Sum(barbecue_members.budget) as total_budget'
    + ' FROM barbecues LEFT JOIN barbecue_members ON barbecues.id = barbecue_members.barbecue_id'
    + ' WHERE barbecues.id=? '
    + ' GROUP BY barbecues.title ORDER BY date ASC', [id],
    );

    // const [rows] = await connection.query('SELECT * FROM barbecues WHERE id=?', [id]);
    return rows;
  }
  const [rows] = await connection.query(
    'SELECT barbecues.id, title, date, suggested_budget, suggested_budget_no_drink, description, notes,'
    + ' Count(barbecue_members.name) as members, Sum(barbecue_members.budget) as total_budget'
    + ' FROM barbecues LEFT JOIN barbecue_members ON barbecues.id = barbecue_members.barbecue_id'
    + ' GROUP BY barbecues.title ORDER BY date ASC',
  );
  return rows;
}

async function insert(barbecue) {
  const connection = await db();
  const sql = 'INSERT INTO barbecues(title, date, suggested_budget, suggested_budget_no_drink, description, notes) VALUES (?,?,?,?,?,?);';
  const values = [
    barbecue.title,
    barbecue.date,
    barbecue.suggested_budget,
    barbecue.suggested_budget_no_drink,
    barbecue.description,
    barbecue.notes];
  return connection.query(sql, values);
}

async function update(id, barbecue) {
  const connection = await db();
  const sql = 'UPDATE barbecues SET title=?, date=?, suggested_budget=?, suggested_budget_no_drink=?, description=?, notes=? WHERE id=?';
  const values = [
    barbecue.title,
    barbecue.date,
    barbecue.suggested_budget,
    barbecue.suggested_budget_no_drink,
    barbecue.description,
    barbecue.notes,
    id];
  return connection.query(sql, values);
}

async function remove(id) {
  const connection = await db();
  const sql = 'DELETE FROM barbecue_members WHERE barbecue_id=?';
  connection.query(sql, [id]);
  const sql2 = 'DELETE FROM barbecues WHERE id=?';
  return connection.query(sql2, [id]);
}

module.exports = {
  select, insert, update, remove,
};
