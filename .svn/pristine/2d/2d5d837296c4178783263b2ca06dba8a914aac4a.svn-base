import React,{Component} from 'react';
import { Tree } from 'antd';
var TreeNode = Tree.TreeNode;
class TreeSet extends Component{
	getTreeNode(data){
		return data.map((item)=>{
			return (
				<TreeNode  title={item.roleName} key={item.roleId} />
			)
		})
	}
	render(){
		return (
			<div>
				<Tree defaultExpandAll={true} onCheck={this.props.getSelectUserRole} checkable={true} checkedKeys={this.props.selectRoleIds} >
					<TreeNode  key="0" title="角色">
						{this.getTreeNode(this.props.initTreeNodeData)}
					</TreeNode>
				</Tree>
			</div>
		)
	}
}

export default TreeSet;