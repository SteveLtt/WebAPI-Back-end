//const { DESCRIBE } = require('sequelize/types/query-types')
const request = require('supertest')
const app = require('./common/index')
const helper = require('./common/helper')
const expected_API = {
    "message": "PUBLIC PAGE: You requested a new message URI (root) of the API"
}

const expected_staff = {
    "auth": "true",
    "role": "admin",
    "center": "ShaTin",
    "id": 1
}

const expected_signupCode ={
    "id": expect.any(Number),
    "code": expect.any(String),
    "center": expect.any(String),
    "status": 1
}

const expected_status ={
    "status": 201
}

const expected_user = {
    "auth": "true",
    "role": "user",
    "center": "ShaTin",
    "id": expect.any(Number)
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


    it('Center staff Login', async() => {
        //const token = await helper.getLoginToken(request(app.callback()), "admin123", "123123")
        const res = await request(app.callback())
        .get('/api/users/login')
        .auth('admin123', '123123')
        .send({})
    
        
        expect(res.statusCode).toEqual(200)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_staff)
    })


    it('Check center user signup code and return information', async() => {
        //const token = await helper.getLoginToken(request(app.callback()), "admin123", "123123")
        const res = await request(app.callback())
        .get('/api/users/signupcode/shatin123')
        .send({})
    
        
        expect(res.statusCode).toEqual(200)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_signupCode)
    })

    


    it('Create a new center staff', async() => {
        //const token = await helper.getLoginToken(request(app.callback()), "admin123", "123123")
        const res = await request(app.callback())
        .post('/api/users/add')
        .send({
            "firstname":"ttttt",
            "lastname":"ttttt",
            "username" : "Test123",
            "email" : "test@gmail.com",
            "password" : "123123",
            "role" : "helper",
            "center" : "ShaTin"
        })
    
        
        expect(res.statusCode).toEqual(201)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_status)
    })

    it('Create a new User', async() => {
        //const token = await helper.getLoginToken(request(app.callback()), "admin123", "123123")
        const res = await request(app.callback())
        .post('/api/users/add')
        .send({
            "firstname":"ttttt",
            "lastname":"ttttt",
            "username" : "Test123",
            "email" : "test@gmail.com",
            "password" : "123123",
            "role" : "user"
        })
    
        
        expect(res.statusCode).toEqual(201)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_status)
    })

    it('User Login', async() => {
        //const token = await helper.getLoginToken(request(app.callback()), "admin123", "123123")
        const res = await request(app.callback())
        .get('/api/users/login')
        .auth('user123', '123123')
        .send({})
    
        
        expect(res.statusCode).toEqual(200)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected_user)
    })



    
    


})