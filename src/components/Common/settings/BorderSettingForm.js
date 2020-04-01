import React,{ Component,Fragment } from 'react'
import { 
    Row,
    Col,
    Collapse,
    Form,
    Input,
    Select
} from 'antd'
import { connect } from 'react-redux'
import { changeItem,changeItemArr } from '../../../store/actions/screen-actions'
const { Panel } = Collapse;
const { Option } = Select;
class SettingPropsForm extends Component{
    moduleNameChange = (e)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                name:e.target.value
            }
        })
    }
    moduleStyleWidthChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    width:Number(e.target.value)
                }
            }
        })
    }
    moduleStyleHeightChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    height:Number(e.target.value)
                }
            }
        })
    }
    moduleStyleXChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    x:Number(e.target.value)
                }
            }
        })
    }
    moduleStyleYChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    y:Number(e.target.value)
                }
            }
        })
    }
    moduleStyleBorderTypeChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    borderType:value
                }
            }
        })
    }
    
    render(){
        const { style,name } = this.props.module
        // console.log(options)
        return (
            <div className="setting-form-wrap">
                <Form>
                    <Collapse bordered={false}>
                        <Panel header="基础设置" key="1">
                            <Row gutter={10}>
                                <Col span={6}>
                                    <label htmlFor="">组件名</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <Input
                                            value={name}
                                            onChange={this.moduleNameChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">大小</label>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input
                                            suffix="w" 
                                            value={style.width}
                                            onChange={this.moduleStyleWidthChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input 
                                            suffix="h"
                                            value={style.height}
                                            onChange={this.moduleStyleHeightChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">位置</label>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input 
                                            suffix="x" 
                                            value={style.x}
                                            onChange={this.moduleStyleXChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input 
                                            suffix="y" 
                                            value={style.y}
                                            onChange={this.moduleStyleYChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel header="边框样式" key="2">
                            <Row>
                                <Col span={6}>
                                    <label htmlFor="">边框样式</label>
                                </Col>
                                <Col span={18}>
                                    {
                                        this.props.type === "titleBorder"?<Form.Item>
                                                <Select
                                                    dropdownClassName="dark-style"
                                                    className="border-selector"
                                                    value={style.borderType}
                                                    onChange={this.moduleStyleBorderTypeChange}
                                                >
                                                    <Option value={0}>
                                                        <div className="border-select-option border-title-option0"></div>
                                                    </Option>
                                                    <Option value={1}>
                                                        <div className="border-select-option border-title-option1"></div>
                                                    </Option>
                                                </Select>
                                            </Form.Item>:(<Form.Item>
                                                <Select
                                                    dropdownClassName="dark-style"
                                                    className="border-selector"
                                                    value={style.borderType}
                                                    onChange={this.moduleStyleBorderTypeChange}
                                                >
                                                    <Option value={0}>
                                                        <div className="border-select-option border-option0"></div>
                                                    </Option>
                                                    <Option value={1}>
                                                        <div className="border-select-option border-option1"></div>
                                                    </Option>
                                                </Select>
                                            </Form.Item>)
                                    }
                                </Col>
                            </Row>
                        </Panel>
                    </Collapse>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        changeItem(data){
            const action = changeItem(data)
            dispatch(action)
        },
        changeItemArr(data){
            const action = changeItemArr(data)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SettingPropsForm)