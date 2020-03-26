import {fromJS} from "immutable";
import { save_screen_id } from "../actions/editor-actions";

const initialState = fromJS({
    screenId:""
})

export default (state=initialState,action)=>{
    switch (action.type){
        case save_screen_id:{
            // console.log(action)
            const result = state.set("screenId",action.data)
            return result
        }

        default:
            return state
    }
}