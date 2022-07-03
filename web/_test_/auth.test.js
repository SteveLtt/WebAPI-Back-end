const request = require('supertest')
const app = require('./common/index')

const expected = {
    "auth": "true",
    "role": expect.any(String),
    "center": expect.any(String),
    "id": expect.any(Number)
}

describe('Authentication Testing Cases', () => {
    it('Center staff Login', async() => {
        //const token = await helper.getLoginToken(request(app.callback()), "admin123", "123123")
        const res = await request(app.callback())
        .get('/api/users/login')
        .auth('admin123', '123123')
        .send({})
    
        
        expect(res.statusCode).toEqual(200)
        expect(res.type).toEqual("application/json")
        expect(res.body).toEqual(expected)
    })
})
