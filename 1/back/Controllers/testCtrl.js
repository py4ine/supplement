const db = require('../Database/testModel')

exports.getTest = async (req, res) => {
    const result = await db.getTest();
    console.log(result);
    res.send(result.rows)
}