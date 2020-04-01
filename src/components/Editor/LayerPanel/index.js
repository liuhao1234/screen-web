import React,{Component} from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'
import { sortModules } from '../../../store/actions/screen-actions'
import PanelTitle from '../../Common/PanelTitle'
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd'
import { changeSetting } from '../../../store/actions/setting-actions'
class LayerPanel extends Component{
    getItemStyle = (isDragging, draggableStyle) => {
        return {
            background: isDragging ? "#585858" : "none",
            ...draggableStyle
        }
    };
    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    onDragEnd = (result)=>{
        if (!result.destination) {
            return;
        }
        const items = this.reorder(
            this.props.layerList.toJS(),
            result.source.index,
            result.destination.index
        );
        this.props.sortModules(items)
    }
    layerClick = (id)=>{
        this.props.changeSetting(id)
    }
    render(){
        
        return(
            <div className={classnames("layer-panel",this.props.status)}>
                <PanelTitle
                    icon="icon-layers"
                    name="图层"
                />
                <DragDropContext 
                    onDragEnd={this.onDragEnd}
                >
                    <Droppable 
                        droppableId="layerList"
                    >
                        {(provided, snapshot) => {
                            return <div 
                                className="layer-list"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            > 
                                {this.props.layerList.map((item, index) => (
                                    <Draggable key={item.get("id")} draggableId={item.get("id")} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={classnames("list-item",{
                                                "active":item.get("id") === this.props.settingId
                                            })}
                                            style={this.getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                            onClick={this.layerClick.bind(this,item.get("id"))}
                                        >
                                            <div className="list-item-inner">
                                                <i className="iconfont icon-china"></i>
                                                <span>{item.get("name")}</span>
                                            </div>
                                        </div>
                                    )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        }}
                    </Droppable>
                </DragDropContext>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        layerList:state.screenState.get("modules"),
        settingId:state.settingState.get("id")
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        sortModules(data){
            const action = sortModules(data)
            dispatch(action)
        },
        changeSetting(data){
            const action = changeSetting(data)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LayerPanel);