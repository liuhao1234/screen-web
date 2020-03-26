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
        console.log(JSON.stringify(newValue))
        const { id } = this.props.module
        this.props.changeItemArr({
            id,
            path:["data","data"],
            data:newValue
        })
    };
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
    editorDidMount = (editor,monaco) => {
        // console.log(editor)
        // console.log(monaco)
    };
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
                                editorDidMount={this.editorDidMount}
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