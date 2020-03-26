import React,{ Component,Fragment } from 'react';
import { Table,Tooltip,message, Modal} from 'antd';
import { EditOutlined ,DeleteOutlined, MenuUnfoldOutlined  } from '@ant-design/icons';
import _ from 'lodash';
import Util from '../../../util';
const { confirm } = Modal;

class Datatable extends Component{
	constructor(props){
		super(props);
		this.columns = [{ //列数据
			title: '角色名称',
			align:'center',
			dataIndex: 'roleName'
		}, {
			title: '角色编码',
			align:'center',
			dataIndex: 'roleCode'
		},{
			title: '操作',
			align:'center',
			dataIndex: 'action',
			render: (text, record) => (
					<Fragment>
						<Tooltip title="赋权">
							<MenuUnfoldOutlined className="table-btn" type='menu-unfold' onClick={this.handleSetMenu.bind(this,record)} style={{color:'blue'}} />
						</Tooltip>
                		<Tooltip title="编辑">
							<EditOutlined  className="table-btn" type='edit' onClick={this.handleEdit.bind(this,record)} style={{color:'green'}} />
						</Tooltip>
						<Tooltip title="删除">
							<DeleteOutlined className="table-btn" type='delete' onClick={this.handleDelete.bind(this,record)} style={{color:'red'}} />
						</Tooltip>
					</Fragment>
			)
		}]
	}

	state = {
		refresh : "",
		dataSource:[],
		pagination:{
		},
		loading : false,
		searchValue: {}
	};

	showTotal = (total, range) => {
		return "共"+total+"条记录，当前显示"+ range[0]+"到"+ range[1] +"条";
	};

	handleDelete = (record) => {
		const _this=this;
		confirm({
			title: '确定删除该条信息吗?',
			content: `该信息删除后将不能恢复!`,
			onOk() {
				Util.ajax({
					url:'/role/del/'+record.key,
					data:{}
				}).then((res)=>{
					if(res.code === 200){
						message.success(res.message);
						_this.componentDidMount();
					}else{
						message.error(res.message);
					}
				})
			}
		});
	};

	handleSetMenu = (record)=>{
		this.props.handleSetMenu(record);
	}

	onChange = (pagination)=>{
		// 点击分页时执行这里
		let cur = pagination.current;
		this.setState({pagination:{current:cur}});
		this.getTableData({
			pageSize: pagination.pageSize,
			startIndex: pagination.current
		});
	};

	handleEdit = (record)=>{
		this.props.handleEdit(record);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
			return true
		} else {
			return false
		}
	}

	componentDidMount(){
		// 第一次渲染table时执行这里
		this.setState({pagination:{current:1}});
		this.getTableData({
			pageSize:10,
			startIndex:1
		})

	}

	getTableData(params){
		this.setState({ loading: true });
		Util.ajax({
			url:'/role/query',
			data:{
				...params,
				...this.state.searchValue
			}
		}).then((res)=>{
			//console.log(res)
			let  pagination;
			if(res.code === 200){
				pagination = {
					...this.state.pagination,
					total : res.data.recordsTotal,
					showTotal : this.showTotal
				};
				this.setState({
					loading: false,
					dataSource:res.data.data.map((item)=>{
						return {
							key:item.roleId,
							roleName:item.roleName,
							roleCode:item.roleCode,
							createTime:item.createTime
						}
					}),
					pagination
				})
			}else{
				pagination = {
					...this.state.pagination,
					total : 0
				};
				this.setState({
					loading: false,
					pagination
				})
				message.error(res.message);
			}
		})
	}
	componentWillReceiveProps(nextProps){
		if (_.isEqual(this.props, nextProps)) {
			return;
		}
		this.setState({
			searchValue:nextProps.searchValue
		},()=>{
			this.setState({pagination:{current:1}});
			this.getTableData({
				pageSize:10,
				startIndex:1
			})
		})

	}

	render(){
		return (
			<Fragment>
				<Table 
					columns={this.columns}
					dataSource={this.state.dataSource}
					size="small" 
					bordered={true}
					pagination={this.state.pagination}
					onChange={this.onChange}
				/>
			</Fragment>
		)
	}
}

export default Datatable;