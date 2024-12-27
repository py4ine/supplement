const model = require('../Database/boardModel');

exports.getBoard = async (req, res) => {
    const result = await model.getBoard();
    res.send(result.rows)
}

exports.registBoard = async (req, res) => {
    const {title, content, user} = req.body;
    model.registBoard(title, content, user)
}