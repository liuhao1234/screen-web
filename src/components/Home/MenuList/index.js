import React,{Component,Fragment} from 'react';
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
import { PlusOutlined } from '@ant-design/icons'
import Util from '../../../util';
import Datatable from './table.js'

const { TextArea } = Input;

const layout = {//弹窗表单布局qq
	labelCol: { span: 8 },
	wrapperCol: { span: 12 },
};

const pageLoading = "key"

class MenuList extends Component{
	constructor(props){
		super(props);
		this.addItemForm = React.createRef();
		this.formRef = React.createRef();
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
		modalTitle:""

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
			modalTitle:"新增菜单"
		})
	};

	addItemOk = ()=>{
		let value = this.addItemForm.current.getFieldsValue();
		this.setState({loading:true})
		let _this = this;
		let param = {};
		let url = "";
		if (value.menuId==null) {
			param = {
				'menuName':value.menuName,
				'menuUrl':value.menuUrl,
				'sort':value.sort,
				'className':value.className,
				'remark':value.remark
			};
			url = "/menu/save/";
		} else {
			param = {
				'menuId':value.menuId,
				'menuName':value.menuName,
				'menuUrl':value.menuUrl,
				'sort':value.sort,
				'className':value.className,
				'remark':value.remark
			};
			url = '/menu/update/';
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
			url:'/menu/get/'+record.key,
			data:{}
		}).then((res)=>{
			if(res.code === 200){
				_this.setState({modalVisible:true,
					modalTitle:"修改菜单"
				})
				_this.addItemForm.current.setFieldsValue({
					menuId:res.data.data.menuId,
					menuName:res.data.data.menuName,
					menuUrl:res.data.data.menuUrl,
					sort:res.data.data.sort,
					className:res.data.data.className,
					remark:res.data.data.remark
				});
			}else{
				message.error(res.message);
			}
		})
	};

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
									label="菜单名称"
									name="menuName"
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
								searchValue={this.state.searchValue} handleEdit={this.handleEdit}
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
							name="menuId"
							rules={[]}
						>
							<Input type="hidden"/>
						</Form.Item>
						<Form.Item
							label="菜单名称"
							name="menuName"
							rules={[{
								required: true,
								message: '菜单名称不能为空！',
							}]}
						>
							<Input 
								placeholder="请输入菜单名称"
								autoComplete="off"
							/>
						</Form.Item>
						<Form.Item
							label="菜单URL"
							name="menuUrl"
							rules={[{
								required: true,
								message: '菜单URL不能为空！',
							}]}
						>
							<Input 
								placeholder="请输入菜单URL"
								autoComplete="off"
							/>
						</Form.Item>
						<Form.Item
							label="菜单顺序"
							name="sort"
							rules={[{
								required: true,
								message: '菜单顺序不能为空！',
							}]}
						>
							<Input 
								placeholder="请输入菜单顺序"
								autoComplete="off"
							/>
						</Form.Item>
						<Form.Item
							label="图标名称"
							name="className"
							rules={[{
								required: true,
								message: '图标名称不能为空！',
							}]}
						>
							<Input
								placeholder="请输入图标名称"
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
			</Fragment>
		)
	}
}
export default MenuList;