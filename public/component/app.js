/**
 * Created by baiying on 7/19/17.
 */
import React, {Component} from "react";

export default class App extends Component {
    componentWillMount() {
        this.props.showUsers();
    }

    alertModel() {
        $('#modifyModal').modal('show')
    }

    addUser() {
        const user = this.refs.user.value;
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const sex = this.refs.sex.value;
        const tel = this.refs.tel.value;
        const email = this.refs.email.value;
        const tip = this.refs.tip.value;
        if (!(user && name && age && sex && tel && email && tip)) {
            alert('请输入完整正确的信息');
            return false;
        }
        else if (!(/^1[34578]\d{9}$/.test(tel))) {
            alert("手机号码有误，请重填");
            return false;
        }
        else if (!( /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(email)) {
            alert('邮箱有误,请重填');
            return false;
        }
        else {
            this.props.onAddUser({user, name, age, sex, tel, email, tip})
        }
    }

    deleteUser(userId) {
        this.props.onDelete({userId});
    }

    findUser() {
        const findName = this.refs.findName.value;
            this.props.OnFind({findName});
    }

    render() {
        const users = this.props.users;

        const userList = users.map((ele, index)=> {
            return <tr key={index}>
                <td>{ele.user}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.sex}</td>
                <td>{ele.tel}</td>
                <td>{ele.email}</td>
                <td>{ele.tip}</td>
                <td>
                    <button onClick={this.deleteUser.bind(this, ele.id)}>删除</button>
                </td>
                <td>
                    <button>修改</button>
                </td>
            </tr>
        });

        return <div id="app">
            <div id='operate'>
                <input type="text" ref='findName'/>
                <button onClick={this.findUser.bind(this)}>查询</button>
                <button onClick={this.alertModel.bind(this)} data-toggle="modifyModal">添加</button>
                <div className="modal fade bs-example-modal-lg" id="modifyModal" ref="modifyModal" role="dialog"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">添加一个人员</h4>
                            </div>
                            <div className="input-group">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">用户</span>
                                    <input type="text" ref="user" className="form-control" placeholder="用户名"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">姓名</span>
                                    <input type="text" ref="name" className="form-control" placeholder="姓名"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">年龄</span>
                                    <input type="number" ref="age" className="form-control" placeholder="年龄"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">性别</span>
                                    <select name="sex" id="sex" ref='sex' className="form-control">
                                        <option value="" hidden="hidden">性别</option>
                                        <option value="男">男</option>
                                        <option value="女">女</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">电话</span>
                                    <input type="tel" ref="tel" className="form-control" placeholder="tel"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">邮件</span>
                                    <input type="email" ref="email" className="form-control" placeholder="email"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">备注</span>
                                    <input type="text" ref="tip" className="form-control" placeholder="tip"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="tag" ref="tag"></div>
                                <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this)}>
                                    提交
                                </button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id='userlist'>
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>用户名</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>移动电话</th>
                        <th>电子邮件</th>
                        <th>备注</th>
                        <th>删除</th>
                        <th>修改</th>
                    </tr>
                    {userList}
                    </tbody>
                </table>
            </div>
        </div>
    }
}



