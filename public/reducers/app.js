const showUsers = (state = {addResult:0,mdResult:0,userList:[]}, action)=> {
    if (action.type === 'SHOWUSERS') {
        return Object.assign({},state,{userList:action.users});
    }
    else if(action.type === 'MDADDRESULT'){
        return Object.assign({},state,{addResult:action.addResult});
    }
    else if(action.type === 'MDRESULT'){
        return Object.assign({},state,{mdResult:action.mdResult});

    }
    return state;
};

export default showUsers;