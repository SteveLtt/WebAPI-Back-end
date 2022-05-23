
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const model = require('../models/favorites')
const {validateDog} = require('../controllers/validation.js')
const router = Router({prefix: '/api/favorites'})

router.get('/:id([0-9]{1,})',getById)

router.post('/add', bodyParser(), createFav)
// router.post('/edit', bodyParser(),validateDog, updateDetail)
// router.get('/center/:id',getByCneter)


async function getById(ctx) {
  let id = ctx.params.id
  console.log('id',id)
  // ctx.body = 1;
  let dog = await model.getById(id)
  if (dog.length) {
    ctx.body = dog
  }
}

async function createFav(ctx) {
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

async function updateDetail(ctx) {
  const body = ctx.request.body;
  console.log('body',body);
  let result = await model.edit(body)
  if (result) {
    ctx.status = 201
    ctx.body = result
  } else {
    ctx.status=201
    ctx.body = "{}"
  }
}

module.exports = router;