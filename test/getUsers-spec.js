const mysql = require('mysql');
const con = require('../server/connect');

let request = require('supertest');
let app = require('../server');
describe('users', () => {
    let defaultUser;
    beforeEach((done) => {
        defaultUser = {
            id: 1,
            user: 'baiying',
            name: 'ii',
            age: 21,
            sex: 'nv',
            tel: '15829245760',
            email: '1165444511@qq.com',
            tip: 'haha'
        };
        con.query(`delete from users`, (err, result) => {
            con.query(`insert into users values('${defaultUser.id}','${defaultUser.user}','${defaultUser.name}','${defaultUser.age}','${defaultUser.sex}','${defaultUser.tel}','${defaultUser.email}','${defaultUser.tip}')`, (err, result) => {
                done();
            });
        });
    });

    it('get successfully', function (done) {
        request(app)
            .get('/getUsers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, [defaultUser], done);
    });
});
