import { 
    sort_modules,
    change_item,
    change_item_arr,
    set_screen_data,
    change_screen,
    add_module,
    delete_module
} from '../actions/screen-actions'
import { fromJS } from 'immutable';

const initialState = fromJS({
    id:1,
    name:"大屏数据",
    screen:{//大屏背景数据
        width:1920,
        height:1080,
        color:"#303b48",
        backgroundImg:{
            url:'bg.png',
            size:["80%","auto"],
            position:["300","40%"]
        },
        poster:"poster.png"
    },
    modules:[]
})

export default (state=initialState,action)=>{
    switch (action.type){
        case set_screen_data: //进入组件是给screen赋值
            return fromJS(action.data)
        case sort_modules: //对modules进行排序，改变图层位置
            return state.set("modules",fromJS(action.data))
        case change_screen: //修改screen的数据
            let newScreen = state.get("screen").mergeDeep(fromJS(action.data))
            return state.set("screen",newScreen)
        case change_item: //修改id组件的值
            let newMudules = state.get("modules").map(item=>{
                if(item.get("id") === action.data.id){
                    return item.mergeDeep(fromJS(action.data.data))
                }else{
                    return item
                }
            })
            return state.set("modules",newMudules)
        case change_item_arr: //修改id组建的数组值
            let newMudules2 = state.get("modules").map(item=>{
                if(item.get("id") === action.data.id){
                    // console.log(action.data)
                    return item.setIn(action.data.path,fromJS(action.data.data))
                }else{
                    return item
                }
            })
            return state.set("modules",newMudules2)
        case add_module: // 新增组件
            return state.mergeDeep(fromJS(action.data))
        case delete_module:
            let curIndex
            state.get("modules").map((item,index)=>{
                if(item.get("id") === action.data){
                    curIndex = index
                }
            })
            const newModules = state.get("modules").delete(curIndex)
            return state.set("modules",newModules)
        default:
            return state
    }
}