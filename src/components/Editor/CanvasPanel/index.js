import React,{ Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';
import chinaJson from 'echarts/map/json/china.json'
import dark from '../../../config/echarts-theme/dark'
import { Slider, InputNumber } from 'antd'
import { Rnd } from 'react-rnd';
import { changeItem,changeItemArr,deleteModule } from '../../../store/actions/screen-actions'
import { changeSetting } from '../../../store/actions/setting-actions'
echarts.registerMap('china', chinaJson);
echarts.registerTheme('dark',dark);
class CanvasPanel extends Component{
    state = {
        editorSize:100
    }

    static defaultProps = {
        min:10,
        max:400
    }

    editorSizeChange = (value)=>{
        this.setState({
            editorSize:value
        })
    }
    onWheel = (event)=>{
        // console.log(event)
        // console.log(event.nativeEvent)
        if(event.ctrlKey){
            // event.deltaY 正值向上滚动，负值为向下滚动
            // event.clientX 鼠标距离浏览器可视区左侧距离
            // event.screenX 鼠标距离显示器左侧的距离
            // event.pageX 鼠标距离document左侧的距离
            var editorSize = this.state.editorSize+event.deltaY
            if(editorSize<this.props.min){
                editorSize = this.props.min
            }else if(editorSize>this.props.max){
                editorSize = this.props.max
            }
            this.setState({ editorSize })
        }
    }
    getStatusData = ()=>{
        // console.log(this.editorWrap)
        if(!this.editorWrap){
            return {
                editorScale:1,
                editorInnerWidth:1920,
                editorInnerHeight:1080,
                editorInnerPaddingVertical:50,
                editorInnerPaddingHorizontal:50
            }
        };
        let editorWrapWidth = this.editorWrap.offsetWidth
        let editorWrapHeight = this.editorWrap.offsetHeight
        let editorScale
        let editorInnerWidth
        let editorInnerHeight
        let editorInnerPaddingVertical
        let editorInnerPaddingHorizontal
        const { editorWidth,editorHeight } = this.props
        editorScale = (this.state.editorSize/100).toFixed(1)
        editorInnerWidth = Math.round(editorWidth*editorScale)
        editorInnerHeight = Math.round(editorHeight*editorScale)
        if(editorInnerHeight+100<editorWrapHeight){
            editorInnerPaddingVertical=Math.floor((editorWrapHeight-editorInnerHeight)/2)
        }else{
            editorInnerPaddingVertical = 50
        }

        if(editorInnerWidth+100<editorWrapWidth){
            editorInnerPaddingHorizontal=Math.floor((editorWrapWidth-editorInnerHeight)/2)
        }else{
            editorInnerPaddingHorizontal = 50
        }
        return {
            editorScale,
            editorInnerWidth,
            editorInnerHeight,
            editorInnerPaddingVertical,
            editorInnerPaddingHorizontal
        }
    }
    itemDrag = (id,e,d)=>{
        // console.log(e)
        // console.log(d)
        this.props.changeItem({
            id,
            data:{
                style:{
                    x:parseInt(d.x),
                    y:parseInt(d.y)
                }
            }
        })
    }
    itemResize = (id,e,direction,ref,delta,position)=>{
        // console.log(ref.style)
        // console.log("direction",direction)
        // console.log("delta",delta)
        // console.log("position",position)
        // console.log(ref.style.width)
        this.props.changeItem({
            id,
            data:{
                style:{
                    width:parseInt(ref.style.width),
                    height:parseInt(ref.style.height),
                    x:parseInt(position.x),
                    y:parseInt(position.y)
                }
            }
        })
    }
    moduleSetting = (item)=>{
        this.props.changeSetting(item.id)
    }
    componentDidMount(){
        const { editorWidth } = this.props
        const editorWrapWidth = this.editorWrap.offsetWidth
        // console.log(editorWrapWidth)
        const editorSize = Math.round((editorWrapWidth-100)/editorWidth*100)
        
        this.setState({
            editorSize:editorSize
        })
    }
    canvasSetting = ()=>{
        //编辑大屏面板
        this.moduleSetting({
            id:"screen"
        })
    }
    canvasEditorClick = (ev)=>{
        ev.stopPropagation()
    }
    deleteModule = (id)=>{
        this.props.deleteModule(id)
    }
    render(){
        const { editorWidth,editorHeight,editorBackground } = this.props
        // console.log(editorWidth)
        const { 
            editorScale,
            editorInnerWidth,
            editorInnerHeight,
            editorInnerPaddingVertical,
            editorInnerPaddingHorizontal 
        } = this.getStatusData()
        return(
            <div 
                className={classnames("canvas-panel",this.props.status)}
                onClick = {this.canvasSetting}
            >
                <div 
                    className="canvas-editor-wrap"
                    ref={dom=>{this.editorWrap=dom}}
                >
                    <div 
                        className="canvas-editor-inner"
                        style={{
                            width:editorInnerWidth,
                            height:editorInnerHeight,
                            paddingTop:editorInnerPaddingVertical,
                            paddingBottom:editorInnerPaddingVertical,
                            paddingLeft:editorInnerPaddingHorizontal,
                            paddingRight:editorInnerPaddingHorizontal
                        }}
                    >
                        <div 
                            className="canvas-editor"
                            onClick = {this.canvasEditorClick}
                            onWheel={this.onWheel}
                            style={{
                                width:editorWidth,
                                height:editorHeight,
                                background:editorBackground,
                                transform:`scale(${editorScale})`,
                                transformOrigin:"left top 0px"
                            }}
                        >
                            {
                                this.props.modules.toJS().length!==0&&this.props.modules.toJS().map((item,index)=>{
                                    if(item.type === "text"){
                                        return <Rnd
                                                key={item.id}
                                                size={{
                                                    width:"auto",
                                                    height:"auto"
                                                }}
                                                position={{
                                                    x:item.style.x,
                                                    y:item.style.y
                                                }}
                                                style={{
                                                    zIndex:this.props.modules.toJS().length-index
                                                }}
                                                scale={editorScale}
                                                onDrag={this.itemDrag.bind(this,item.id)}
                                                
                                            >
                                                <div 
                                                    className="modules-wrap"
                                                    onClick={this.moduleSetting.bind(this,item)}
                                                >
                                                    <div className="module-operate">
                                                        <i 
                                                            className="iconfont icon-delete"
                                                            onClick={this.deleteModule.bind(this,item.id)}
                                                        ></i>
                                                    </div>
                                                    <span
                                                        style={{
                                                            color:item.options.style.color,
                                                            fontSize:item.options.style.fontSize
                                                        }}
                                                    >{item.options.text}</span>
                                                </div>
                                            </Rnd>
                                    }else if(item.type === "block"){
                                        return <Rnd
                                                key={item.id}
                                                size={{
                                                    width:item.style.width,
                                                    height:item.style.height
                                                }}
                                                position={{
                                                    x:item.style.x,
                                                    y:item.style.y
                                                }}
                                                style={{
                                                    zIndex:this.props.modules.toJS().length-index
                                                }}
                                                scale={editorScale}
                                                onDrag={this.itemDrag.bind(this,item.id)}
                                                onResize={this.itemResize.bind(this,item.id)}
                                            >
                                                <div 
                                                    className="modules-wrap"
                                                    onClick={this.moduleSetting.bind(this,item)}
                                                >
                                                    <div className="module-operate">
                                                        <i 
                                                            className="iconfont icon-delete"
                                                            onClick={this.deleteModule.bind(this,item.id)}
                                                        ></i>
                                                    </div>
                                                    <div
                                                        style={{
                                                            width:item.style.width,
                                                            height:item.style.height,
                                                            backgroundColor:item.style.background,
                                                            border:item.style.border.show?`${item.style.border.width}px solid ${item.style.border.color}`:"none",
                                                            borderRadius:item.style.border.radius
                                                        }}
                                                    ></div>
                                                </div>
                                            </Rnd>
                                    }else if(item.type === "border"){
                                        return <Rnd
                                                key={item.id}
                                                size={{
                                                    width:item.style.width,
                                                    height:item.style.height
                                                }}
                                                position={{
                                                    x:item.style.x,
                                                    y:item.style.y
                                                }}
                                                style={{
                                                    zIndex:this.props.modules.toJS().length-index
                                                }}
                                                scale={editorScale}
                                                onDrag={this.itemDrag.bind(this,item.id)}
                                                onResize={this.itemResize.bind(this,item.id)}
                                            >
                                                <div className="modules-wrap"
                                                    style={{background:item.style.background}}
                                                    onClick={this.moduleSetting.bind(this,item)}
                                                >
                                                    <div className="module-operate">
                                                        <i 
                                                            className="iconfont icon-delete"
                                                            onClick={this.deleteModule.bind(this,item.id)}
                                                        ></i>
                                                    </div>
                                                    <div 
                                                        className={"module-border border-type"+item.style.borderType}
                                                        style={{
                                                            borderWidth:`${item.style.height/2>100?100:item.style.height/2}px ${item.style.width/2>150?150:item.style.width/2}px`,
                                                            borderImageSlice:`${item.style.height/2>100?100:item.style.height/2} ${item.style.width/2>150?150:item.style.width/2}`
                                                        }}
                                                    ></div>
                                                </div>
                                            </Rnd>
                                    }else if(item.type === "titleBorder"){
                                        return <Rnd
                                                key={item.id}
                                                size={{
                                                    width:item.style.width,
                                                    height:item.style.height
                                                }}
                                                position={{
                                                    x:item.style.x,
                                                    y:item.style.y
                                                }}
                                                style={{
                                                    zIndex:this.props.modules.toJS().length-index
                                                }}
                                                scale={editorScale}
                                                onDrag={this.itemDrag.bind(this,item.id)}
                                                onResize={this.itemResize.bind(this,item.id)}
                                            >
                                                <div className="modules-wrap"
                                                    style={{background:item.style.background}}
                                                    onClick={this.moduleSetting.bind(this,item)}
                                                >
                                                    <div className="module-operate">
                                                        <i 
                                                            className="iconfont icon-delete"
                                                            onClick={this.deleteModule.bind(this,item.id)}
                                                        ></i>
                                                    </div>
                                                    <div 
                                                        className={"module-title-border border-title-type"+item.style.borderType}
                                                    ></div>
                                                </div>
                                            </Rnd>
                                    }else if(item.type === "pie"){
                                        return <Rnd
                                                key={item.id}
                                                size={{
                                                    width:item.style.width,
                                                    height:item.style.height
                                                }}
                                                position={{
                                                    x:item.style.x,
                                                    y:item.style.y
                                                }}
                                                style={{
                                                    zIndex:this.props.modules.toJS().length-index
                                                }}
                                                scale={editorScale}
                                                onDrag={this.itemDrag.bind(this,item.id)}
                                                onResize={this.itemResize.bind(this,item.id)}
                                            >
                                                <div className="modules-wrap"
                                                    style={{background:item.style.background}}
                                                    onClick={this.moduleSetting.bind(this,item)}
                                                >
                                                    <div className="module-operate">
                                                        <i 
                                                            className="iconfont icon-delete"
                                                            onClick={this.deleteModule.bind(this,item.id)}
                                                        ></i>
                                                    </div>
                                                    <ReactEcharts
                                                        option={item.options}
                                                        theme="dark"
                                                        style={{
                                                            width:item.style.width,
                                                            height:item.style.height
                                                        }}
                                                    />
                                                </div>
                                            </Rnd>
                                    }else if(item.type === "map"){
                                        return <Rnd
                                                key={item.id}
                                                size={{
                                                    width:item.style.width,
                                                    height:item.style.height
                                                }}
                                                position={{
                                                    x:item.style.x,
                                                    y:item.style.y
                                                }}
                                                style={{
                                                    zIndex:this.props.modules.toJS().length-index
                                                }}
                                                scale={editorScale}
                                                onDrag={this.itemDrag.bind(this,item.id)}
                                                onResize={this.itemResize.bind(this,item.id)}
                                            >
                                                <div className="modules-wrap"
                                                    style={{background:item.style.background}}
                                                    onClick={this.moduleSetting.bind(this,item)}
                                                >
                                                    <div className="module-operate">
                                                        <i 
                                                            className="iconfont icon-delete"
                                                            onClick={this.deleteModule.bind(this,item.id)}
                                                        ></i>
                                                    </div>
                                                        <ReactEcharts
                                                            option={item.options}
                                                            theme="dark"
                                                            style={{
                                                                width:item.style.width,
                                                                height:item.style.height
                                                            }}
                                                        />
                                                </div>
                                            </Rnd>
                                    }else{ //柱图及折线图
                                        return <Rnd
                                                key={item.id}
                                                size={{
                                                    width:item.style.width,
                                                    height:item.style.height
                                                }}
                                                position={{
                                                    x:item.style.x,
                                                    y:item.style.y
                                                }}
                                                style={{
                                                    zIndex:this.props.modules.toJS().length-index
                                                }}
                                                scale={editorScale}
                                                onDrag={this.itemDrag.bind(this,item.id)}
                                                onResize={this.itemResize.bind(this,item.id)}
                                            >
                                                <div className="modules-wrap"
                                                    style={{background:item.style.background}}
                                                    onClick={this.moduleSetting.bind(this,item)}
                                                >
                                                    <div className="module-operate">
                                                        <i 
                                                            className="iconfont icon-delete"
                                                            onClick={this.deleteModule.bind(this,item.id)}
                                                        ></i>
                                                    </div>
                                                    <ReactEcharts
                                                        option={item.options}
                                                        theme="dark"
                                                        style={{
                                                            width:item.style.width,
                                                            height:item.style.height
                                                        }}
                                                    />
                                                </div>
                                            </Rnd>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="canvas-status">
                    <div className="status-bar">
                        <InputNumber
                            min={this.props.min}
                            max={this.props.max}
                            size="small"
                            style={{width:70,float:"right",marginTop:3,marginRight:5}}
                            value={this.state.editorSize}
                            formatter={value=>`${value}%`}
                            onChange={this.editorSizeChange}
                        />
                        <Slider
                            min={this.props.min}
                            max={this.props.max}
                            tooltipVisible={false}
                            style={{width:100,float:"right",marginRight:10}}
                            onChange={this.editorSizeChange}
                            value={this.state.editorSize}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        editorHeight:state.screenState.getIn(["screen","height"]),
        editorWidth:state.screenState.getIn(["screen","width"]),
        editorBackground:state.screenState.getIn(["screen","color"]),
        modules:state.screenState.get("modules")
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        changeItem(data){
            const action = changeItem(data)
            dispatch(action)
        },
        changeSetting(data){
            const action = changeSetting(data)
            dispatch(action)
        },
        changeItemArr(data){
            const action = changeItemArr(data)
            dispatch(action)
        },
        deleteModule(id){
            const action = deleteModule(id)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CanvasPanel);