import React,{Component,Fragment} from 'react'
import { 
	Row,
	Col,
	Form,
	Input,
	Button,
	Card,
	Modal,
	message
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Util from '../../../util';
import Datatable from './table.js';
import TreeSet from './tree.js';

const { TextArea } = Input;

const layout = {//弹窗表单布局
	labelCol: { span: 8 },
	wrapperCol: { span: 12 },
};

const pageLoading = "key"

class RoleList extends Component{
	constructor(props){
		super(props);
		this.addItemForm = React.createRef();
		this.formRef = React.createRef();
		this.initTreeNode();
		message.loading({
            content:"页面正在加载...",
            duration:0,
            key:pageLoading
        })
	}

	state = {
		searchValue:{},
		modalVisible:false,
		loading:false,
		modalTitle:"",

		//角色菜单权限弹框相关值
		menuRoleModalVisible : false,
		selectRoleId:0,
		selectMenuIds:[],
		initTreeNodeData : {},

	};

	onSearch = (value)=>{
		value['refresh']=Math.random();
		this.setState({
			searchValue:value
		})
	};

	onReset = () => {
		this.formRef.current.resetFields();
	};

	addItem = ()=>{
		this.setState({
			modalVisible:true,
			modalTitle:"新增角色"
		})
	};

	addItemOk = ()=>{
		let value = this.addItemForm.current.getFieldsValue();
		this.setState({loading:true})
		let _this = this;
		let param = {};
		let url = "";
		if (value.roleId==null) {
			param = {
				'roleName':value.roleName,
				'roleCode':value.roleCode,
				'remark':value.remark
			};
			url = "/role/save/";
		} else {
			param = {
				'roleId':value.roleId,
				'roleName':value.roleName,
				'roleCode':value.roleCode,
				'remark':value.remark
			};
			url = '/role/update/';
		}
		Util.ajax({
			url:url,
			data:param
		}).then((res)=>{
			_this.setState({loading:false});
			if(res.code === 200){
				message.success(res.message);
				_this.setState({
					modalVisible:false, searchValue:{}
				});
				_this.addItemForm.current.resetFields();
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

	handleEdit = (record)=>{
		let _this = this;
		Util.ajax({
			url:'/role/get/'+record.key,
			data:{}
		}).then((res)=>{
			if(res.code === 200){
				_this.setState({modalVisible:true,
					modalTitle:"修改角色"
				})
				_this.addItemForm.current.setFieldsValue({
					roleId:res.data.data.roleId,
					roleName:res.data.data.roleName,
					roleCode:res.data.data.roleCode,
					remark:res.data.data.remark
				});
			}else{
				message.error(res.message);
			}
		})
	};


	//第一次加载树形菜单数据
	initTreeNode(){
		Util.ajax({
			url:'/menu/query',
			data:{"startIndex":1,"pageSize":9999
			}
		}).then((res)=>{
			if(res.code === 200){
				this.setState({initTreeNodeData: res.data.data})
			}else{
				message.error(res.message);
			}
		})
	}

	menuRoleItemCancel = ()=>{
		this.setState({
			menuRoleModalVisible:false
		})
	};

	//从tree组件获取所选值
	getSelectRoleMenu(values){
		this.setState({selectMenuIds:values});
	}

	//获取角色已经设置的菜单
	handleSetMenu = (record)=>{
		const _this = this;
		this.setState({loading: true})
		Util.ajax({
			url:'/user/queryRoleMenu/'+record.key,
			data:{}
		}).then((res)=>{
			if(res.code === 200){
				_this.setState({
					selectRoleId:record.key,
					menuRoleModalVisible:true,
					loading: false,
					selectMenuIds:res.data.data.map((item)=>{
						return item.menuId+""
					})
				})
			}else{
				message.error(res.message);
			}
		})
	};

	//设置角色菜单关系     确定按钮事件
	handleSetRoleMenu = (values)=>{
		let _this = this;
		_this.setState({loading: true,menuRoleModalVisible:false});
		Util.ajax({
			url:'/user/setRoleMenu/',
			data:{'roleId':_this.state.selectRoleId,'menuIds':_this.state.selectMenuIds}
		}).then((res)=>{
			_this.setState({loading:false})
			if(res.code === 200){
				message.success(res.message);
				_this.setState({loading: false,menuRoleModalVisible:false});
			}else{
				message.error(res.message);
			}
		})
	}

	componentDidMount(){
        message.success({
            content:"页面加载成功！",
            duration:2,
            key:pageLoading
        })
    }

	render() {
		return (
			<Fragment>
				<Row
					gutter={[10,10]}
				>
					<Col span={24}>
						<Card
							title="查询条件" 
							bordered={false}
							size="small"
						>
							<Form
								onFinish={this.onSearch}
								layout="inline"
								ref={this.formRef}

							>
								<Form.Item
									label="角色名称"
									name="roleName"
								>
									<Input 
										placeholder="请输入关键字"
										autoComplete="off"
									/>
								</Form.Item>
								<Form.Item
									label="角色编码"
									name="roleCode"
								>
									<Input
										placeholder="请输入关键字"
										autoComplete="off"
									/>
								</Form.Item>
								<Form.Item>
									<Button type="primary" htmlType="submit">查询</Button>
								</Form.Item>
								<Form.Item>
									<Button htmlType="button" onClick={this.onReset}>重置</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
					<Col span={24}>
						<Card
							title="查询结果" 
							bordered={false}
							size="small"
							extra={
								<Button 
									type="primary"
									icon={<PlusOutlined />}
									onClick={this.addItem}
								>新增</Button>
							}
						>
							<Datatable
								searchValue={this.state.searchValue} handleEdit={this.handleEdit} handleSetMenu={this.handleSetMenu}
							/>
						</Card>
					</Col>
				</Row>
				<Modal
					title={this.state.modalTitle}
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
							name="roleId"
							rules={[]}
						>
							<Input type="hidden"/>
						</Form.Item>
						<Form.Item
							label="角色名称"
							name="roleName"
							rules={[{
								required: true,
								message: '角色名称不能为空！',
							}]}
						>
							<Input 
								placeholder="请输入角色名称"
								autoComplete="off"
							/>
						</Form.Item>
						<Form.Item
							label="角色编码"
							name="roleCode"
							rules={[{
								required: true,
								message: '角色编码不能为空！',
							}]}
						>
							<Input 
								placeholder="请输入角色编码"
								autoComplete="off"
							/>
						</Form.Item>
						<Form.Item
							label="备注"
							name="remark"
						>
							<TextArea style={{height:100,overflowY:"auto"}} placeholder="请输入备注"/>

						</Form.Item>
					</Form>
				</Modal>

				<Modal
					title={'设置菜单'}
					visible={this.state.menuRoleModalVisible}
					maskClosable={false}
					confirmLoading={this.state.loading}
					onCancel={this.menuRoleItemCancel}
					onOk={this.handleSetRoleMenu}
				>
					<TreeSet selectMenuIds={this.state.selectMenuIds}  getSelectRoleMenu = {this.getSelectRoleMenu.bind(this)} initTreeNodeData={this.state.initTreeNodeData} ></TreeSet>
				</Modal>

			</Fragment>
		)
	}
}
export default RoleList;