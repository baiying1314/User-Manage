import request from "superagent";

export default store=>next=>action=> {
    if (action.type === 'GETUSERS') {
        request.get('/getUsers')
            .end((err, res)=> {
                next({type: "SHOWUSERS", users: res.body})
            })
    }
    else {
        next(action);
    }
}