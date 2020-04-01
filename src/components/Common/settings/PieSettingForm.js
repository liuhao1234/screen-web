import React,{ Component,Fragment } from 'react'
import { 
    Row,
    Col,
    Collapse,
    Form,
    Input,
    Switch,
    Select,
    InputNumber
} from 'antd'
import { connect } from 'react-redux'
import { changeItem,changeItemArr } from '../../../store/actions/screen-actions'
import ColorPicker from '../ColorPicker'
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
                    width:e.target.value
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
                    height:e.target.value
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
    
    switchBackground = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    background:checked?"#ff0000":"transparent"
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
    moduleTitleShowChange = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        show:checked
                    }
                }
            }
        })
    }
    moduleOptionsTitleTextChange = (e)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        text:e.target.value
                    }
                }
            }
        })
    }
    moduleOptionsTitlePositionChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        left:value
                    }
                }
            }
        })
    }
    moduleOptionsTitleTopChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        top:value
                    }
                }
            }
        })
    }
    moduleOptionsTitleFontSizeChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        textStyle:{
                            fontSize:value
                        }
                    }
                }
            }
        })
    }
    moduleOptionsTitleColorChange = color=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        textStyle:{
                            color:color.hex
                        }
                    }
                }
            }
        })
    }
    moduleLegendShowChange = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        show:checked
                    }
                }
            }
        })
    }
    moduleOptionsLegendTopChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        top:value
                    }
                }
            }
        })
    }
    moduleOptionsLegendFontSizeChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        textStyle:{
                            fontSize:value
                        }
                    }
                }
            }
        })
    }
    moduleOptionsLegendColorChange = (color)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        textStyle:{
                            color:color.hex
                        }
                    }
                }
            }
        })
    }

    optionSeriesCenterXChange = (value)=>{
        const { id } = this.props.module
        let center = this.props.module.options.series.center
        center[0] = value+"%"
        this.props.changeItemArr({
            id,
            path:["options","series","center"],
            data:center
        })
    }

    optionSeriesCenterYChange = (value)=>{
        const { id } = this.props.module
        let center = this.props.module.options.series.center
        center[1] = value+"%"
        this.props.changeItemArr({
            id,
            path:["options","series","center"],
            data:center
        })
    }

    optionSeriesRadiusInnerChange = (value)=>{
        const { id } = this.props.module
        let radius = this.props.module.options.series.radius
        radius[0] = value+"%"
        this.props.changeItemArr({
            id,
            path:["options","series","radius"],
            data:radius
        })
    }

    optionSeriesRadiusOuterChange = (value)=>{
        const { id } = this.props.module
        let radius = this.props.module.options.series.radius
        radius[1] = value+"%"
        this.props.changeItemArr({
            id,
            path:["options","series","radius"],
            data:radius
        })
    }

    optionsRoseTypeChange = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    series:{
                        roseType:checked
                    }
                }
            }
        })
    }

    optionSeriesBorderWidthChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    series:{
                        itemStyle:{
                            borderWidth:value
                        }
                    }
                }
            }
        })
    }
    optionSeriesBorderColorChange = (color)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    series:{
                        itemStyle:{
                            borderColor:color.hex
                        }
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
                                <Col span={6}>
                                    <label htmlFor="">背景色</label>
                                </Col>
                                <Col span={18}>
                                    <Switch 
                                        checked={style.background!=='transparent'}
                                        style={{marginTop:5}}
                                        onChange={this.switchBackground}
                                    />
                                </Col>
                                {
                                    style.background==="transparent"?
                                    ""
                                    :
                                    <Col span={18} push={6}>
                                        <ColorPicker 
                                            value={style.background}
                                            onChange={this.moduleStyleBackgroundChange}
                                        />
                                    </Col>
                                }
                            </Row>
                        </Panel>
                        <Panel header="标题" key="2">
                            <Row>
                                <Col span={7}>
                                    <label htmlFor="">显示</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <Switch
                                            checked={options.title.show}
                                            onChange={this.moduleTitleShowChange}
                                        />
                                    </Form.Item>
                                </Col>
                                {
                                    options.title.show?<Fragment>
                                        <Col span={7}>
                                            <label htmlFor="">标题</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <Input 
                                                    value={options.title.text}
                                                    onChange={this.moduleOptionsTitleTextChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">位置</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <Select
                                                    placeholder="请选择"
                                                    value={options.title.left}
                                                    dropdownClassName="dark-style"
                                                    onChange={this.moduleOptionsTitlePositionChange}
                                                >
                                                    <Option value="left">居左</Option>
                                                    <Option value="center">居中</Option>
                                                    <Option value="right">居右</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">间距</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={0}
                                                    style={{width:174}}
                                                    value={options.title.top} 
                                                    onChange={this.moduleOptionsTitleTopChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体大小</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={12}
                                                    style={{width:174}}
                                                    value={options.title.textStyle.fontSize} 
                                                    onChange={this.moduleOptionsTitleFontSizeChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体颜色</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <ColorPicker 
                                                    value={options.title.textStyle.color}
                                                    onChange={this.moduleOptionsTitleColorChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Fragment>:""
                                }
                            </Row>
                        </Panel>
                        <Panel header="图例" key="3">
                            <Row>
                                <Col span={7}>
                                    <label htmlFor="">显示</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <Switch
                                            checked={options.legend.show}
                                            onChange={this.moduleLegendShowChange}
                                        />
                                    </Form.Item>
                                </Col>
                                {
                                    options.legend.show?<Fragment>
                                        <Col span={7}>
                                            <label htmlFor="">间距</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={0}
                                                    style={{width:174}}
                                                    value={options.legend.top} 
                                                    onChange={this.moduleOptionsLegendTopChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体大小</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={12}
                                                    style={{width:174}}
                                                    value={options.legend.textStyle.fontSize} 
                                                    onChange={this.moduleOptionsLegendFontSizeChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体颜色</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <ColorPicker 
                                                    value={options.legend.textStyle.color}
                                                    onChange={this.moduleOptionsLegendColorChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Fragment>:""
                                }
                            </Row>
                        </Panel>
                        <Panel header="饼图配置" key="4">
                            <Row>
                                <Col span={6}>
                                    <label htmlFor="">玫瑰图</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <Switch
                                            checked={options.series.roseType}
                                            onChange={this.optionsRoseTypeChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">中心点</label>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            max={100}
                                            formatter={value => `X ${value}%`}
                                            value={parseInt(options.series.center[0])}
                                            onChange={this.optionSeriesCenterXChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            max={100}
                                            formatter={value => `Y  ${value}%`}
                                            value={parseInt(options.series.center[1])}
                                            onChange={this.optionSeriesCenterYChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">内外半径</label>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            max={100}
                                            formatter={value => `内 ${value}%`}
                                            value={parseInt(options.series.radius[0])}
                                            onChange={this.optionSeriesRadiusInnerChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            max={100}
                                            formatter={value => `外  ${value}%`}
                                            value={parseInt(options.series.radius[1])}
                                            onChange={this.optionSeriesRadiusOuterChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">边框大小</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            max={10}
                                            style={{width:184}}
                                            value={options.series.itemStyle.borderWidth}
                                            onChange={this.optionSeriesBorderWidthChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">边框颜色</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <ColorPicker
                                            value={options.series.itemStyle.borderColor}
                                            onChange={this.optionSeriesBorderColorChange}
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