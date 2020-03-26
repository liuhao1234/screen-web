import React,{ Component,Fragment } from "react"
import { Button,Input,Form,message,Modal } from 'antd'
import { connect } from 'react-redux'
import LoginBg from '../../static/images/login_bg.jpg'
import Syslogo from '../../static/images/sys_logo.png'
import Loginpc from '../../static/images/login_pc.png'
import '../../static/style/login.styl'
import Env from '../../env'
import axios from 'axios'
import { saveUserInfo } from "../../store/actions/login-actions";

class LoginPage extends Component{
    constructor (props){
        super(props)
        this.state = {

        }
    }
    onLogin = (value)=>{
        let _this = this;
        let path = Env.getPath()
        axios.post(path+'/login',{
            'loginCode':value.username,
            'password':value.password
        }).then(function(response){
            let res = response.data;
            if(response.status === 200){
                if(res.code === 200){
                    //登录成功
                    message.success(res.message);
                    sessionStorage.setItem("beautifulGirl",res.token);
                    _this.props.saveUserInfo({
                        realName:res.data.usernameReal
                    });
                    _this.props.history.push("home");
                }else{
                    //登录失败
                    message.warning(res.message);
                }
            } else {
                //链接失败
                Modal.error({
                    title: '链接失败',
                    content: response.statusText,
                });
            }
        })
    }
    render(){
        return (
            <Fragment>
                <div className="login_bg">
                    <img className="login_bg_pic" src={LoginBg} alt="" />
                    <div className="main">
                        <img className="sys_logo" src={Syslogo} alt="" />  
                        <img className="login_pc" src={Loginpc} alt="" />   
                        <div className="login_form">
                            <h4 className="form_header">用户登录 login</h4>
                            <Form
                                onFinish={this.onLogin}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{
                                        required: true,
                                        message: '用户名不能为空！',
                                    }]}
                                >
                                    <Input size="large" placeholder="请输入用户名" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{
                                        required: true,
                                        message: '密码不能为空！',
                                    }]}
                                >
                                    <Input.Password size="large"  placeholder="请输入密码"/>
                                </Form.Item>
                                <Button size="large" type="primary" htmlType="submit" block>确定</Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2018-2099 北京资采<br/>All Rights Reserved 北京资采
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {

    }
}

const mapDispatchToProps = dispatch=>{
    return {
        saveUserInfo(userInfo){
            const action = saveUserInfo(userInfo)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);