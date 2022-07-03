//const { DESCRIBE } = require('sequelize/types/query-types')
const request = require('supertest')
const app = require('./common/index')

const expected_value ={
    "id": 7,
    "code": "3751",
    "age": 7,
    "center": "ShaTin",
    "create_datetime": "2022-05-23T11:56:37.000Z",
    "name": "OPGG",
    "about": "This is a dog",
    "photo": "123",
    "status": 1
}
const expected_format =[{
    "id": expect.any(Number),
    "code": expect.any(String),
    "age": expect.any(Number),
    "center": expect.any(String),
    "create_datetime": expect.any(String),
    "name": expect.any(String),
    "about": expect.any(String),
    "photo": expect.any(String),
    "status": 1
}]
const expected2 = expect.any(Object)
const expected_create = {
    "status": 201
}
  

describe('Dogs authentication Testing Cases', ()=> {
    it('Return all dogs', async() => {
    const res = await request(app.callback())
    .get('/api/dog/')
    .send({})

    
    expect(res.statusCode).toEqual(200)
    expect(res.type).toEqual("application/json")
    expect(res.body).toContainEqual(expected_value)
    })

    it('Return dogs by center', async() => {
        const res = await request(app.callback())
        .get('/api/dog/center/ShaTin')
        .send({})
    
        
        expect(res.statusCode).toEqual(200)
        expect(res.type).toEqual("application/json")
        expect(res.body).toContainEqual(expected_value)
        })


    it('Return dog by id', async() => {
        const res = await request(app.callback())
        .get('/api/dog/3751')
        .send({})
    
        
        expect(res.statusCode).toEqual(200)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_value)
  
    })

    it('Create a new dog', async() => {
        const res = await request(app.callback())
        .post('/api/dog/add')
        .send({
            "name":"ttttt",
            "age" : "18",
            "code" : "0998",
            "center" : "ShaTin",
            "about" : "this is a dog",
            "photo" : "photo"
        })
    
        
        expect(res.statusCode).toEqual(201)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_create)
  
    })


    it('Edit dog detail', async() => {
        const res = await request(app.callback())
        .post('/api/dog/edit')
        .send({
            "id" : "1",
            "name":"test123",
            "age" : "15",
            "code" : "0238",
            "center" : "ShaTin",
            "about" : "This is a dog"
        })
    
        
        expect(res.statusCode).toEqual(201)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_create)
  
    })



    it('remove dog by id', async() => {
        const res = await request(app.callback())
        .get('/api/dog/remove/1')
        .send({})
    
        
        expect(res.statusCode).toEqual(201)
        expect(res.type).toEqual("application/json")

  
    })


    it('Search dog by keyword', async() => {
        const res = await request(app.callback())
        .get('/api/dog/search/OPGG')
        .send({})
    
        
        expect(res.statusCode).toEqual(200)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_format)
  
    })

})