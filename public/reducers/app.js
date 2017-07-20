/**
 * Created by baiying on 7/20/17.
 */
const showUsers = (state = [], action)=> {
    if (action.type === 'SHOWUSERS') {
        return [...state, ...action.users];
    }
    return state;
};

export default showUsers;