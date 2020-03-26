import React,{Component} from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'
import { Tabs, Row, Col } from 'antd'
import { addModule } from '../../../store/actions/screen-actions'
import PanelTitle from '../../Common/PanelTitle'
import { lineModule,barModule } from '../../../data/modules'
const { TabPane } = Tabs;
class ModulePanel extends Component{
    addLineModule = ()=>{
        let modulesList = {}
        let id = this.getNewId(this.props.modulesList)
        lineModule.id = id
        modulesList = {
            modules:[lineModule]
        }
        this.props.addModule(modulesList)
    }
    addBarModule = ()=>{
        let modulesList = {}
        let id = this.getNewId(this.props.modulesList)
        barModule.id = id
        modulesList = {
            modules:[barModule]
        }
        this.props.addModule(modulesList)
    }
    getNewId = (list)=>{
        let id = Math.random().toString().split(".")[1]
        let isNewId = true
        list.forEach(item=>{
            if(item.id == id){
                isNewId = false
            }
        })
        if(isNewId){
            return id
        }else{
            this.getNewId(list)
        }
    }
    render(){
        return(
            <div className={classnames("modules-panel",this.props.status)}>
                <PanelTitle
                    icon="icon-box"
                    name="组件集"
                />
                <div className="modules-bar-bg"></div>
                <Tabs 
                    defaultActiveKey="1"
                    tabPosition="left"
                    tabBarGutter={0}
                >
                    <TabPane tab={<i title="基础" style={{fontSize:20}} className="iconfont icon-base"></i>} key="1">
                        <Row>
                            <Col span={12}>
                                <div 
                                    className="module-item"
                                    onClick={this.addBarModule}
                                >
                                    <div className="item-poster item-base-bar"></div>
                                    <h2>基础柱图</h2>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div 
                                    className="module-item"
                                    onClick={this.addLineModule}
                                >
                                    <div className="item-poster item-base-line"></div>
                                    <h2>基础折线</h2>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<i title="地图" style={{fontSize:26}} className="iconfont icon-china"></i>} key="2">
                        <Row>
                            <Col span={24}>
                                <div className="module-item module-item-fluid">
                                    <div className="item-poster item-base-map"></div>
                                    <h2>基础地图</h2>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="module-item module-item-fluid">
                                    <div className="item-poster item-base-map-move"></div>
                                    <h2>迁徙地图</h2>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<i title="文本" style={{fontSize:22}} className="iconfont icon-text"></i>} key="3">
                        <Row>
                            <Col span={12}>
                                <div className="module-item">
                                    <div className="item-poster item-text"></div>
                                    <h2>普通文本</h2>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<i title="边框" style={{fontSize:22}} className="iconfont icon-border"></i>} key="4">
                        <Row>
                            <Col span={12}>
                                <div className="module-item">
                                    <div className="item-poster item-border"></div>
                                    <h2>基础边框</h2>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<i title="其他" style={{fontSize:22}} className="iconfont icon-more"></i>} key="5">
                        <Row>
                            <Col span={12}>
                                <div className="module-item">
                                    <div className="item-poster item-block"></div>
                                    <h2>四边形</h2>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        modulesList:state.screenState.get("modules").toJS()
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        addModule(data){
            const action = addModule(data)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModulePanel);