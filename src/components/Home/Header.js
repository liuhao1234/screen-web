import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Util from '../../util'
import {Form, Input, message, Modal} from "antd";
const layout = {//弹窗表单布局
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};
class Header extends Component{

    constructor(props){
        super(props);
        this.addItemForm = React.createRef();
    }

    logout = ()=>{
        Util.logOut()
    };

    state = {
        modalVisible:false,
        loading:false,
    };

    addItem = ()=>{
        this.setState({
            modalVisible:true,
            modalTitle:"修改密码"
        })
    };

    addItemOk = ()=>{
        let value = this.addItemForm.current.getFieldsValue();
        Util.ajax({
            url:'/user/updatePassword/',
            data:{'password':value.oldPs,'newPassword':value.newPs,'confirmPassword':value.confirmPs}
        }).then((res)=>{
            if(res.code === 200){
                message.success(res.message);
            }else{
                message.error(res.message);
            }
        })
    };

    addItemCancel = ()=>{
        this.setState({
            modalVisible:false
        })
    };
    render(){
        const {realName} = this.props;
        return (
            <div className="phead">
                <div className="head_con">
                    <div className="left">
                        <b>北京资采DPWEB</b>
                    </div>
                    <div className="right">
                        <span className="user"><small>您好！{realName}</small></span>
                        <span onClick={this.addItem}><small>修改密码</small></span>
                        <span className="exit"
                            onClick={this.logout}
                        ><small>退出</small></span>
                    </div>
                </div>
                <Modal
                    title='修改密码'
                    maskClosable={false}
                    visible={this.state.modalVisible}
                    onOk={this.addItemOk}
                    onCancel={this.addItemCancel}
                >
                    <Form
                        {...layout}
                        ref={this.addItemForm}
                    >
                        <Form.Item
                            name="userId"
                            rules={[]}
                        >
                            <Input type="hidden"/>
                        </Form.Item>
                        <Form.Item
                            label="原密码"
                            name="oldPs"
                            rules={[{
                                required: true,
                                message: '原密码不能为空！',
                            }]}
                        >
                            <Input
                                placeholder="请输入原密码"
                                type="password"
                                disabled={this.props.disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            label="新密码"
                            name="newPs"
                            rules={[{
                                required: true,
                                message: '新密码不能为空！',
                            }]}
                        >
                            <Input
                                placeholder="请输入新密码"
                                type="password"
                                disabled={this.props.disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            label="确认新密码"
                            name="confirmPs"
                            rules={[{
                                required: true,
                                pattern: /^\w{6,20}$/,
                                message: '确认新密码不能为空！',
                            }]}
                        >
                            <Input
                                placeholder="请输入确认新密码"
                                type="password"
                                disabled={this.props.disabled}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    const { loginState } = state
    return {
        realName: loginState.getIn(["userInfo","realName"])
    }
}
const mapDispatchToProps = dispatch=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)