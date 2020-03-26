import React,{ Component } from 'react'
import { Row, Col, Button, message } from 'antd'
const pageLoading = "key"
class HistoryVisual extends Component{
    constructor(props){
        super(props)
        message.loading({
            content:"页面正在加载...",
            duration:0,
            key:pageLoading
        })
    }
    gotoEdit = (id)=>{
        this.props.history.push({ pathname : '/editor' ,query : { id } })
    }
    componentDidMount(){
        message.success({
            content:"页面加载成功！",
            duration:2,
            key:pageLoading
        })
    }
    render(){
        return (
            <div className="visaul-history-list">
                <Row gutter={[10,10]}>
                    <Col lg={8} xl={6} xxl={4}>
                        <div 
                            className="visaul-item-add"
                            onClick = {this.gotoEdit.bind(this,null)}
                        >
                            <i className="iconfont icon-add"></i>
                        </div>
                    </Col>
                    <Col lg={8} xl={6} xxl={4}>
                        <div className="visaul-history-item">
                            <div className="visual-item-poster">
                                <div className="visual-item-operate">
                                    <Button type="primary" onClick={this.gotoEdit.bind(this,"aaa")}>编辑</Button>
                                    <Button>预览</Button>
                                </div>
                            </div>
                            <ul>
                                <li><span className="visual-item-name">瓦房店大屏</span></li>
                                <li><span className="visual-item-date">2020-03-06 14:38</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HistoryVisual