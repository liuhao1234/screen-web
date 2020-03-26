import React,{ Component,Fragment } from 'react';
import {connect} from 'react-redux'
import { 
    Row,
    Col,
    Collapse,
    Form,
    Input,
    Switch,
    Select,
    InputNumber,
    Divider
} from 'antd'
import { changeScreen } from '../../../store/actions/screen-actions'
import ColorPicker from '../ColorPicker'
const { Panel } = Collapse;
class CanvasBgSetting extends Component{
    screenWidthChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        this.props.changeScreen({
            width:Number(e.target.value)
        })
    }
    screenHeightChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        this.props.changeScreen({
            height:Number(e.target.value)
        })
    }
    moduleStyleBackgroundChange = (color)=>{
        this.props.changeScreen({
            color:color.hex
        })
    }
    render(){
        const { width,height,color } = this.props.screenState
        return <div className="setting-form-wrap">
            <Collapse 
                bordered={false}
                defaultActiveKey="1"
            >
                <Panel 
                    header="基础设置" 
                    key="1"
                >
                    <Row gutter={10}>
                        <Col span={6}>
                            <label htmlFor="">大小</label>
                        </Col>
                        <Col span={9}>
                            <Form.Item>
                                <Input
                                    suffix="w"
                                    value={width}
                                    onChange={this.screenWidthChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item>
                                <Input 
                                    suffix="h"
                                    value={height}
                                    onChange={this.screenHeightChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <label htmlFor="">背景色</label>
                        </Col>
                        <Col span={18}>
                            <ColorPicker 
                                value={color}
                                onChange={this.moduleStyleBackgroundChange}
                            />
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </div>
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        screenState:state.screenState.get("screen").toJS()
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        changeScreen(data){
            const action = changeScreen(data)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CanvasBgSetting);