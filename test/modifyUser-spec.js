const mysql = require('mysql');
const con = require('../server/connect');

let request = require('supertest');
let app = require('../server');
describe('USERS-CRUD', () => {
    let defaultUser, defaultMdUser, id;
    let mdResult = {mdResult: true};
    beforeEach((done) => {
        defaultUser = {
            user: 'baiying',
            name: 'ii',
            age: 21,
            sex: 'nv',
            tel: '15829245760',
            email: '1165444511@qq.com',
            tip: 'haha',
            id: 1
        };
        defaultMdUser = {
            user: 'bai',
            name: 'ii',
            age: 21,
            sex: 'nv',
            tel: '15829245760',
            email: '1165444511@qq.com',
            tip: 'haha',
            id: 1
        };
        con.query(`delete from users`, (err, result) => {
            const insertQuery = `insert into users values('${defaultUser.user}','${defaultUser.name}',${defaultUser.age},'${defaultUser.sex}','${defaultUser.tel}','${defaultUser.email}','${defaultUser.tip}',NULL)`;
            con.query(insertQuery, function (err, result) {
                id = result.insertId;
                if (err) {
                    console.log(err);
                }
                done();
            });

        });
    });

    it('find user successfully', function (done) {
        defaultMdUser.id = id;
        request(app)
            .post('/modifyUser')
            .send(defaultMdUser)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, mdResult, done);
    });
});
