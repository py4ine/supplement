const pool = require('./db');

const getTest = async () => {
    const result = await pool.query("SELECT * FROM student.sample");
    return result
}

module. exports = {
    getTest,
}