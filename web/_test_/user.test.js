//const { DESCRIBE } = require('sequelize/types/query-types')
const request = require('supertest')
const app = require('./common/index')

const expected_API = {
    "message": "PUBLIC PAGE: You requested a new message URI (root) of the API"
}

  
describe('Users authentication Testing Cases', ()=> {
    it('Test User api', async() => {
    const res = await request(app.callback())
    .get('/api/users/')
    .send({})

    
    expect(res.statusCode).toEqual(200)
    expect(res.type).toEqual("application/json")
    expect(res.body).toEqual(expected_API)
    })


})