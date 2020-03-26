import React,{Component} from 'react'
import classnames from 'classnames'
export default class HeaderIcon extends Component{
    changeStatus = ()=>{
        if(this.props.onStatusChange){
            this.props.onStatusChange(!this.props.checked)
        }
    }
    render(){
        return (
            <span 
                className={classnames("header-icon",{"checked":this.props.checked})}
                title={this.props.title}
                onClick={this.changeStatus}
            >
                <i className={classnames("iconfont",this.props.icon)}></i>
            </span>
        )
    }
}