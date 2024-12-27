const db = require('./db');

const getBoard = () => {
    return db.query("SELECT * FROM student.board")
}

const registBoard = (title, content, user) => {
    db.query("INSERT INTO student.board (board_title, board_content, board_user, board_date VALUES ($1, $2, $3, now())",
        [title, content, user]
    )
}

module.exports = {
    getBoard,
    registBoard,
}