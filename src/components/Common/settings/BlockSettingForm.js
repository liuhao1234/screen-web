import React,{ Component,Fragment } from 'react'
import { 
    Row,
    Col,
    Collapse,
    Form,
    Input,
    Switch,
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
    moduleStyleBackgroundChange = (color)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    background:color.hex
                }
            }
        })
    }
    switchBlockBorder = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    border:{
                        show:checked
                    }
                }
            }
        })
    }
    moduleStyleBorderWidthChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    border:{
                        width:value
                    }
                }
            }
        })
    }
    moduleStyleBorderColorChange = (color)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    border:{
                        color:color.hex
                    }
                }
            }
        })
    }
    moduleStyleBorderRadiusChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    border:{
                        radius:value
                    }
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
                        <Panel header="四边形样式" key="2">
                            <Row>
                                <Col span={6}>
                                    <label htmlFor="">背景色</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <ColorPicker 
                                            value={style.background}
                                            onChange={this.moduleStyleBackgroundChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">圆角</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <InputNumber 
                                            value={style.border.radius}
                                            style={{width:186}}
                                            onChange={this.moduleStyleBorderRadiusChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">描边</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <Switch 
                                            checked={style.border.show}
                                            onChange={this.switchBlockBorder}
                                        />
                                    </Form.Item>
                                </Col>
                                {
                                    style.border.show?<Fragment>
                                        <Col span={6}>
                                            <label htmlFor="">描边宽度</label>
                                        </Col>
                                        <Col span={18}>
                                            <Form.Item>
                                                <InputNumber 
                                                    value={style.border.width}
                                                    style={{width:186}}
                                                    onChange={this.moduleStyleBorderWidthChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <label htmlFor="">描边颜色</label>
                                        </Col>
                                        <Col span={18}>
                                            <ColorPicker 
                                                value={style.border.color}
                                                onChange={this.moduleStyleBorderColorChange}
                                            />
                                        </Col>
                                    </Fragment>:""
                                }
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