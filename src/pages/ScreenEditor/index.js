import React,{Component,Fragment} from 'react'
import { connect } from 'react-redux'
import '../../static/style/editor.styl';
import Header from '../../components/Editor/Header'
import SettingPanel from '../../components/Editor/SettingPanel'
import LayerPanel from '../../components/Editor/LayerPanel'
import ModulesPanel from '../../components/Editor/ModulesPanel'
import CanvasPanel from '../../components/Editor/CanvasPanel'
import { testScreenData } from '../../data/data'
import { screenModule } from '../../data/modules'
import { setScreenData } from '../../store/actions/screen-actions'
import { saveScreenId } from '../../store/actions/editor-actions'
class ScreenEditor extends Component{
    constructor(props){
        super(props)
        this.layoutStatus = {
            layerPanel:"status01",
            modulesPanel:"status02",
            canvasPanel:"status05",
            settingPanel:"status01",
            visualistPanel:"status02"
        }
    }
    componentDidMount(){
        // console.log(this.props.history.location.query)
        const query = this.props.history.location.query
        let curId
        if(query){
            curId = query.id
            this.props.saveScreenId(curId)
        }else{
            curId = this.props.screenId
        }
        // console.log(curId)
        if(curId){
            setTimeout(()=>{
                this.props.setScreenData(testScreenData)
            },500)
        }else{
            this.props.setScreenData(screenModule)
        }
    }
    // 判断各个面板的显示状态
    getStatusByProps = ()=>{
        //判断图层状态
        if(this.props.layerPanelShow){
            this.layoutStatus.layerPanel="status01"
        }else{
            this.layoutStatus.layerPanel="status02"
        }

        // 判断组件面板状态
        if(this.props.modulesPanelShow&&this.props.layerPanelShow){
            this.layoutStatus.modulesPanel="status02"
        }else if(this.props.modulesPanelShow&&!this.props.layerPanelShow){
            this.layoutStatus.modulesPanel="status01"
        }else{
            this.layoutStatus.modulesPanel="status03"
        }

        // 判断画布面板的状态
        if(!this.props.layerPanelShow&&!this.props.modulesPanelShow&&!this.props.settingPanelShow){
            this.layoutStatus.canvasPanel="status01"
        }else if(!this.props.layerPanelShow&&!this.props.modulesPanelShow&&this.props.settingPanelShow){
            this.layoutStatus.canvasPanel="status02"
        }else if(this.props.layerPanelShow&&!this.props.modulesPanelShow&&!this.props.settingPanelShow){
            this.layoutStatus.canvasPanel="status03"
        }else if(this.props.layerPanelShow&&!this.props.modulesPanelShow&&this.props.settingPanelShow){
            this.layoutStatus.canvasPanel="status04"
        }else if(!this.props.layerPanelShow&&this.props.modulesPanelShow&&!this.props.settingPanelShow){
            this.layoutStatus.canvasPanel="status03"
        }else if(!this.props.layerPanelShow&&this.props.modulesPanelShow&&this.props.settingPanelShow){
            this.layoutStatus.canvasPanel="status04"
        }else if(this.props.layerPanelShow&&this.props.modulesPanelShow&&!this.props.settingPanelShow){
            this.layoutStatus.canvasPanel="status05"
        }else{
            this.layoutStatus.canvasPanel="status06"
        }

        //判断设置面板状态
        if(this.props.settingPanelShow){
            this.layoutStatus.settingPanel="status01"
        }else{
            this.layoutStatus.settingPanel="status02"
        }
    }
    
    render(){
        this.getStatusByProps()
        return(
            <Fragment>
                <div className="screen-editor-page">
                    <Header 
                        history={this.props.history}
                    />
                    <SettingPanel status={this.layoutStatus.settingPanel} />
                    <LayerPanel status={this.layoutStatus.layerPanel} />
                    <ModulesPanel status={this.layoutStatus.modulesPanel} />
                    <CanvasPanel status={this.layoutStatus.canvasPanel} />
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    const { headerState,editorState } = state
    return {
        layerPanelShow:headerState.get("layerPanelShow"),
        modulesPanelShow:headerState.get("modulesPanelShow"),
        visualistPanelShow:headerState.get("visualistPanelShow"),
        settingPanelShow:headerState.get("settingPanelShow"),
        screenId:editorState.get("screenId")
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        setScreenData(data){
            const action = setScreenData(data)
            dispatch(action)
        },
        saveScreenId(data){
            const action = saveScreenId(data)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ScreenEditor);