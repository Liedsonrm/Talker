const express =  require("express");
const router = express.Router()
var users = []

router.post("/login", (req, res) => {
    var { user } = req.body
    users.push(user)
    console.log(users)
})

router.get('/users', (req, res) => {
    res.send(users)
})

module.exports = {router, users}
