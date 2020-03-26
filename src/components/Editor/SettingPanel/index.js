import React,{Component} from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'
import PanelTitle from '../../Common/PanelTitle'
import SettingForm from '../../Common/settings/SettingForm'

class SettingPanel extends Component{
    getCurModule = ()=>{
        let module = this.props.moduleList.filter(value=>{
            return value.get("id") === this.props.moduleId
        }) 
        return module.toJS()[0] || {
            id:"screen",
            type:"background",
            name : "背景"
        }
    }
    render(){
        let module = this.getCurModule()
        return(
            <div className={classnames("setting-panel",this.props.status)}>
                <PanelTitle
                    icon="icon-setting"
                    name={`${module.name}设置`}
                />
                {
                    <SettingForm 
                        module={module}
                    />
                }
                
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        moduleId:state.settingState.get("id"),
        moduleList:state.screenState.get("modules")
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SettingPanel);