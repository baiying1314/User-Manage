const mysql = require('mysql');
const con = require('../server/connect');

let request = require('supertest');
let app = require('../server');
describe('USERS-CRUD', () => {
    let defaultUser, id;
    beforeEach((done) => {
        defaultUser = {
            user: 'baiying',
            name: 'ii',
            age: 21,
            sex: 'nv',
            tel: '15829245760',
            email: '1165444511@qq.com',
            tip: 'haha'
        };
        con.query(`delete from users`, (err, result) => {
            const selectquery = `insert into users values(id = NULL,user ='${defaultUser.user}',name='${defaultUser.name}',age =${defaultUser.age},sex = '${defaultUser.sex}',tel ='${defaultUser.tel}',email = '${defaultUser.email}',tip = '${defaultUser.tip}')`;
            con.query(selectquery, function (err, result) {
                console.log(result);
                id = result.insertId;
                if (err) {
                    console.log(err);
                }
                done();
            });

        });

    });

    it('delete user successfully', function (done) {
        request(app)
            .post('/deleteUser')
            .send({userId: id})
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
