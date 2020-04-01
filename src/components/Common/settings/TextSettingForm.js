import React,{ Component } from 'react'
import { 
    Row,
    Col,
    Collapse,
    Form,
    Input,
    InputNumber
} from 'antd'
import { connect } from 'react-redux'
import { changeItem,changeItemArr } from '../../../store/actions/screen-actions'
import ColorPicker from '../ColorPicker'
const { Panel } = Collapse;
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
    moduleStyleXChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    x:e.target.value
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
                    y:e.target.value
                }
            }
        })
    }
    moduleTextChange = (e)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    text:e.target.value
                }
            }
        })
    }
    moduleTextFontSizeChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    style:{
                        fontSize:value
                    }
                }
            }
        })
    }
    moduleTextFontColorChange = (color)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    style:{
                        color:color.hex
                    }
                }
            }
        })
    }
    render(){
        const { style,options,name } = this.props.module
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
                        <Panel header="文本样式" key="2">
                            <Row>
                                <Col span={6}>
                                    <label htmlFor="">文本</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <Input
                                            value={options.text}
                                            onChange={this.moduleTextChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">字号</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <InputNumber
                                            min={12}
                                            value={options.style.fontSize}
                                            style={{width:184}}
                                            onChange={this.moduleTextFontSizeChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">字色</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <ColorPicker 
                                            value={options.style.color}
                                            onChange={this.moduleTextFontColorChange}
                                        />
                                    </Form.Item>
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