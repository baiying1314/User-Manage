const mysql = require('mysql');
const con = require('../server/connect');

let request = require('supertest');
let app = require('../server');
describe('USERS-CRUD', () => {
    let defaultUser, id;
    beforeEach((done) => {
         defaultUser = {
            user: 'baiying',
            name: '白颖',
            age: 21,
            sex: '女',
            tel: '15829245760',
            email: '1165444511@qq.com',
            tip: '学生'
        };
        con.query(`delete from users`, (err, result) => {
            const insertQuery = `insert into users values(NULL,'${defaultUser.user}','${defaultUser.name}',${defaultUser.age},'${defaultUser.sex}','${defaultUser.tel}','${defaultUser.email}','${defaultUser.tip}')`;
            con.query(insertQuery, function (err, result) {
                if (err) {
                    console.log(err);
                }
                id = result.insertId;
                done();
            });
        });
    });

    it('get all users successfully', function (done) {
        defaultUser.id = id;
        request(app)
            .get('/getUsers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, [defaultUser], done);
    });
});
