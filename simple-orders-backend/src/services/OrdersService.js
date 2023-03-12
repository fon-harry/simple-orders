export default (database) => {
  const orderFieldsMapper = {
    phoneNumber: 'phone_number',
  };

  async function getOrder(id) {
    const result = await database.query('SELECT * FROM orders WHERE id = $1;', [
      id,
    ]);
    return result.rows[0];
  }

  async function getOrders() {
    const result = await database.query(
      'SELECT * FROM orders ORDER BY created_at;',
    );
    return result.rows;
  }

  async function createOrder(order) {
    const result = await database.query(
      'INSERT INTO orders (name, phone_number, address) VALUES ($1, $2, $3) RETURNING *;',
      [order.name, order.phoneNumber, order.address],
    );
    return result.rows[0];
  }

  async function updateOrder(id, order) {
    const data = [];
    const updates = Object.keys(order)
      .map((key) => {
        const filedName = orderFieldsMapper[key] || key;
        const value = order[key];
        data.push(value);
        return `${filedName} = $${data.length}`;
      })
      .join(', ');

    const result = await database.query(
      `UPDATE orders SET ${updates} WHERE id = $${
        data.length + 1
      } RETURNING *;`,
      [...data, id],
    );
    return result.rows[0];
  }

  return {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
  };
};
