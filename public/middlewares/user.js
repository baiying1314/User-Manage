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
    else if (action.type === 'DELETEUSER') {
        request.post('/deleteUser')
            .send(action.userId)
            .end(()=> {
                store.dispatch({type: 'GETUSERS'})
            })
    }
    else if(action.type === 'FINDUSER'){
        request.post('/findUser')
            .send(action.findName)
            .end((err,res)=>{
                next({type: "SHOWUSERS", users: res.body})
            })
    }
    else {
        next(action);
    }
}