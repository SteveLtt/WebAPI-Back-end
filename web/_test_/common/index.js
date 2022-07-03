const Koa = require('koa')


const cors = require('@koa/cors')
const app = new Koa()
const port=3001




const dog = require('../../routes/dog.js')
const users = require('../../routes/users.js')
const special = require('../../routes/special.js')
const favorites = require('../../routes/favorites.js')
app.use(cors(['*']))
app.use(dog.routes())
app.use(special.routes())
app.use(favorites.routes())
app.use(users.routes())


module.exports = app