/**
 * Created by baiying on 7/19/17.
 */
import React, {Component} from "react";

export default class App extends Component {
    componentWillMount() {
        this.props.showUsers();
    }

    render() {
        const users = this.props.users;
        console.log(users);
        const userList = users.map((ele, index)=> {
            return <tr key={index}>
                <td>{ele.user}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.sex}</td>
                <td>{ele.tel}</td>
                <td>{ele.email}</td>
                <td>{ele.tip}</td>
            </tr>
        });

        return <div id="app">
            <div id='operate'>
                <input type="text"/>
                <button>查询</button>
                <button>添加</button>
            </div>
            <div id='userlist'>
                <table>
                    <tbody>
                    <tr>
                        <th>用户名</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>移动电话</th>
                        <th>电子邮件</th>
                        <th>备注</th>
                    </tr>
                    {userList}
                    </tbody>
                </table>
            </div>
        </div>
    }
}



