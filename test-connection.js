// index.js
const sequelize = require('./db/config/sequelize');
const pool = require('./db/config/database');

(async () => {
  try {
    // Test pool
    const res = await pool.query('SELECT NOW()');
    console.log(res.rows[0].now);

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    
  }
})();
