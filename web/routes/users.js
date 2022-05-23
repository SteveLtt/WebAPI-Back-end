const Router = require('koa-router')
const model = require('../models/users')
//const can = require('../permission/users')
const auth = require('../controllers/auth')
const bodyParser = require('koa-bodyparser')
const {validateArticle} = require('../controllers/validation.js')
const {validateUser} = require('../controllers/validation_user.js')
const router = Router({prefix: '/api/users'})

router.get('/', publicAPI)
router.get('/login', auth, privateAPI);
router.post('/add', bodyParser(), validateUser, createUser)
router.get('/signupcode/:id',getSignUpCode)

function publicAPI(ctx) {  
    ctx.body = {message: 'PUBLIC PAGE: You requested a new message URI (root) of the API'}
  }


  async function getSignUpCode(ctx) {
    let id = ctx.params.id
    console.log('id',id)
    // ctx.body = 1;
    let dog = await model.getSignUpCode(id)
    if (dog.length) {
      ctx.body = dog[0]
    }
  }



function privateAPI(ctx) {
  const user = ctx.state.user;
  ctx.body = {'auth':'true','role':user.role,'center':user.center,'id':user.id} 
}

async function getAll(ctx) {
  const permission = can.readAll(ctx.state.user)
  if (!permission.granted) {
    ctx.status = 403;
  } else {
    const result = await model.getAll()
    if (result.length) {
      ctx.body = result;
    }    
  }
}


async function createUser(ctx) {
    const body = ctx.request.body;
    console.log('body',body);
    let result = await model.add(body)
    if (result) {
      ctx.status = 201
      ctx.body = result
    } else {
      ctx.status=201
      ctx.body = "{}"
    }
  }

module.exports = router
















