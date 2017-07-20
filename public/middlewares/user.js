import request from "superagent";

export default store=>next=>action=> {
    if (action.type === 'GETUSERS') {
        request.get('/getUsers')
            .end((err, res)=> {
                next({type: "SHOWUSERS", users: res.body})
            })
    }
    else if (action.type === 'ADDUSER') {
        request.post('/addUser')
            .send(action.user)
            .end(()=> {
                store.dispatch({type: 'GETUSERS'})
            })
    }
    else {
        next(action);
    }
}