import {fromJS} from "immutable";
import { change_setting } from "../actions/setting-actions";

const initialState = fromJS({
    id:"screen" //"screen"是默认修改面板
})

export default (state=initialState,action)=>{
    switch (action.type){
        case change_setting:{
            return state.set("id",action.data)
        }

        default:
            return state
    }
}