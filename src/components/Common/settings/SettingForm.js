import React,{ Component,Fragment } from 'react'
import { Tabs } from 'antd'
import LineSettingForm from './LineSettingForm'
import BarSettingForm from './BarSettingForm'
import SettingDataForm from './SettingDataForm'
import CanvasBgSetting from './CanvasBgSetting'
import TextSettingForm from './TextSettingForm'
import BlockSettingForm from './BlockSettingForm'
import BorderSettingForm from './BorderSettingForm'
import PieSettingForm from './PieSettingForm'
import MapSettingForm from './MapSettingForm'
const { TabPane } = Tabs
export default class SettingFrom extends Component{
    getPropsSettingComponent = ()=>{
        const type = this.props.module.type
        if(type==="background"){
            return <CanvasBgSetting/>
        }else if(type === "line"){
            return <LineSettingForm 
                module={this.props.module}
            />
        }else if(type === "bar"){
            return <BarSettingForm
                module={this.props.module}
            />
        }else if(type === "text"){
            return <TextSettingForm
                module={this.props.module}
            />
        }else if(type === "block"){
            return <BlockSettingForm
                module={this.props.module}
            />
        }else if(type === "border"){
            return <BorderSettingForm
                module={this.props.module}
            />
        }else if(type === "titleBorder"){
            return <BorderSettingForm
                type="titleBorder"
                module={this.props.module}
            />
        }else if(type === "pie"){
            return <PieSettingForm 
                module={this.props.module}
            />
        }else if(type === "map"){
            return <MapSettingForm 
                module={this.props.module}
            />
        }
    }
    getDataSettingComponent = ()=>{
        const type = this.props.module.type
        if(type==="background"){
            return <div className="setting-no-data">该组件无数据配置</div>
        }else if(type==="line" || type==="bar" || type==="pie"){
            return <SettingDataForm 
                module={this.props.module}
            />
        }
    }
    render(){
        return (
            <Fragment>
                <Tabs className="setting-form-tab" defaultActiveKey="1">
                    <TabPane tab="属性" key="1">
                        {
                            this.getPropsSettingComponent()
                        }
                    </TabPane>
                    <TabPane tab="数据" key="2">
                        {
                            this.getDataSettingComponent()
                        }
                    </TabPane>
                </Tabs>
            </Fragment>
        )
    }
}