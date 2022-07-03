//const { DESCRIBE } = require('sequelize/types/query-types')
const request = require('supertest')
const app = require('./common/index')

const expected_fav = {
    "id": 1,
    "dog_id": 1,
    "user_id": 14,
    "create_datetime": "2022-05-22T19:35:21.000Z",
    "status": 0,
    "code": "0238",
    "age": 15,
    "center": "ShaTin",
    "name": "test123",
    "about": "This is a dog",
    "photo": expect.any(String)
}

const expected_status ={
    "status": 201
}

  
describe('Favourites authentication Testing Cases', ()=> {
    it('List all favourites by user', async() => {
    const res = await request(app.callback())
    .get('/api/favorites/14')
    .send({})

    
    expect(res.statusCode).toEqual(200)
    expect(res.type).toEqual("application/json")
    expect(res.body).toContainEqual(expected_fav)
    })


    it('Add favourites by user', async() => {
        const res = await request(app.callback())
        .post('/api/favorites/add')
        .send({
            "dog_id":"7",
            "user_id":"14"
        })
    
        
        expect(res.statusCode).toEqual(201)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_status)
    })

    
})