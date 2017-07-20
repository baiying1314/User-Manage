/**
 * Created by baiying on 7/20/17.
 */
import {connect} from "react-redux";
import App from "../component/app";

const mapStatetoProps = (state)=> {
    return {users: state};
};

const mapDispatchToProps = (dispatch)=> {
    return {
        showUsers: ()=> {
            dispatch({type: 'GETUSERS'});
        },
        onAddUser:(user)=>{
            dispatch({type:'ADDUSER',user});
        }
    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);