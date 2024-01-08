const todos = {
    1: "todo 1 data"
}
const getAllTodos = (req, res) => {
    return res.status(200).json({
        data: Object.values(todos)
    })
}
module.exports = {
    getAllTodos
}