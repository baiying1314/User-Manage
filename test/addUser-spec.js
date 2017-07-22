const mysql = require('mysql');
const con = require('../server/connect');

let request = require('supertest');
let app = require('../server');
describe('USERS-CRUD', () => {
    let defaultUser = {
        user: 'baiying',
        name: '白颖',
        age: 21,
        sex: '女',
        tel: '15829245760',
        email: '1165444511@qq.com',
        tip: '学生'
    };
    let addResult = {addResult: true};
    it('add successfully', function (done) {
        request(app)
            .post('/addUser')
            .send(defaultUser)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, addResult, done);
    });
});
