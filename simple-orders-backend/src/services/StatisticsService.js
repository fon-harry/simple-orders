export default (database) => ({
  async getOrderStatistic() {
    const query = `
    SELECT
      DATE(created_at),
      CONCAT(
        COUNT(CASE WHEN status = 'confirmed' THEN id END), 
        ' (', 
        ROUND(CAST(COUNT(CASE WHEN status = 'confirmed' THEN id END) AS float) / CAST(COUNT(id) AS float) * 100),
        '%)') AS confirmed,
      COUNT(CASE WHEN status = 'canceled' THEN id END) AS canceled,
      COUNT(CASE WHEN status = 'postponed' THEN id END) AS postponed
    FROM
	    orders
    GROUP BY
	    DATE(created_at);
    `;
    const result = await database.query(query);
    return result.rows;
  },
});
