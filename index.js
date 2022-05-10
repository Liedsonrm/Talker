const express = require('express');
const cors = require('cors');
var { router, users } = require("./routes/routes.js")

const app = express()
app.use(express.json())

var users = []

app.use(router)













app.listen(88, () => console.log("-> Server running on port 8000"))