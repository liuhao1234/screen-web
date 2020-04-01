import React,{ Component, Fragment } from 'react'
import { Row,Col,Form,Input,Select } from 'antd'
import MonacoEditor from 'react-monaco-editor';
import { connect } from 'react-redux'
import { changeItem,changeItemArr } from '../../../store/actions/screen-actions'
import { monacoEditorConfig } from '../../../config/monacoEditor'
const { Option } = Select;
class SettingDataForm extends Component{
    onEditorChange = (newValue,event) => {
        // console.log("event",event)
        // console.log("onChange", newValue); // eslint-disable-line no-console
        const type = this.props.module.type
        if(type === "line"){
            this.editLineData(newValue)
        }else if(type === "bar"){
            this.editLineData(newValue)
        }else if(type === "pie"){
            this.editPieData(newValue)
        }
        
    }

    editPieData = (newValue)=>{
        try{
            let jsonData = eval(newValue);
            const { id } = this.props.module
            
            let curOptions = this.props.module.options
            let legend = []
            jsonData.forEach((item,index)=>{
                legend.push(item.name)
            })
            curOptions.legend.data = legend
            curOptions.series.data = jsonData
            // console.log(curOptions)
            this.props.changeItem({
                id,
                data:{
                    data:{
                        data:newValue
                    }
                }
            })
            this.props.changeItemArr({
                id,
                path:["options"],
                data:curOptions
            })
        }catch(e){
            console.log(e)
        }
    }

    editLineData = (newValue)=>{
        try{
            let jsonData = eval(newValue);
            const { id } = this.props.module
            
            let curOptions = this.props.module.options
            let legend = []
            let xAxisNames = []
            
            jsonData.forEach((item,index)=>{
                legend.push(item.name)
                xAxisNames = [];
                let seriesData = []
                item.data.forEach((item,index)=>{
                    xAxisNames.push(item.name)
                    seriesData.push(item.value)
                })
                curOptions.series[index].name = item.name
                curOptions.series[index].data = seriesData
            })
            
            curOptions.legend.data = legend
            curOptions.xAxis.data = xAxisNames
            this.props.changeItem({
                id,
                data:{
                    data:{
                        data:newValue
                    }
                }
            })
            this.props.changeItemArr({
                id,
                path:["options"],
                data:curOptions
            })
        }catch(e){

        }
        
    }

    moduleDataTypeChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                data:{
                    type:value
                }
            }
        })
    }
    moduleDataUrlChange = (e)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                data:{
                    url:e.target.value
                }
            }
        })
    }
    render(){
        const { data } = this.props.module
        return (
            <div className="setting-form-wrap">
                <Form>
                    <Row gutter={10}>
                    <Col span={6}>
                            <label htmlFor="">数据类型</label>
                        </Col>
                        <Col span={18}>
                            <Form.Item>
                                <Select
                                    placeholder="请选择数据类型"
                                    value={data.type}
                                    dropdownClassName="dark-style"
                                    onChange={this.moduleDataTypeChange}
                                >
                                    <Option value="api">API</Option>
                                    <Option value="static">静态数据</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        {
                            data.type==="api"?<Fragment>
                                <Col span={6}>
                                    <label htmlFor="">URL</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <Input 
                                            placeholder="请输入url" 
                                            value={data.url}
                                            onChange={this.moduleDataUrlChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Fragment>:""
                        }
                        <Col span={6}>
                            <label htmlFor="">数据展示</label>
                        </Col>
                        <Col span={18}>
                            <MonacoEditor
                                width="207"
                                height="200"
                                value={data.data}
                                options={monacoEditorConfig}
                                theme="vs-dark"
                                onChange={this.onEditorChange}
                            />
                        </Col>
                    </Row>
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
export default connect(mapStateToProps,mapDispatchToProps)(SettingDataForm)