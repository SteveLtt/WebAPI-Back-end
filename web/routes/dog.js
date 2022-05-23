
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const model = require('../models/dog')
const {validateDog} = require('../controllers/validation.js')
const router = Router({prefix: '/api/dog'})

router.get('/:id([0-9]{1,})',getById)
router.get('/', getAll)
router.post('/add', bodyParser(), validateDog, createArticle)
router.post('/edit', bodyParser(),validateDog, updateDetail)
router.get('/center/:id',getByCneter)
router.get('/remove/:id',removebyId)
router.get('/search/:id',searchByKey)

router.get('/list',(req,res)=>{
    res.json(data)
})

async function searchByKey(ctx) {
  let center = ctx.params.id
  console.log('id',center)
  // ctx.body = 1;
  let dog = await model.searchByKey(center)
  if (dog) {
    ctx.body = dog
  }
}

async function getAll(ctx, next){  
  let articles = await model.getAll()
  if (articles.length) {
    ctx.body = articles
  }
}  

async function getByCneter(ctx) {
  let center = ctx.params.id
  console.log('id',center)
  // ctx.body = 1;
  let dog = await model.getByCneter(center)
  if (dog) {
    ctx.body = dog
  }
}

async function removebyId(ctx) {
  let id = ctx.params.id
  console.log('id',id)
  // ctx.body = 1;
  let result = await model.removebyId(id)
  if (result) {
    ctx.status = 201
    ctx.body = result
  } else {
    ctx.status=201
    ctx.body = "{}"
  }
}


async function getById(ctx) {
  let id = ctx.params.id
  console.log('id',id)
  // ctx.body = 1;
  let dog = await model.getById(id)
  if (dog.length) {
    ctx.body = dog[0]
  }
}

async function createArticle(ctx) {
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