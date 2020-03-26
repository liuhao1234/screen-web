import {show_layer,
        show_modules,
        show_visualist,
        show_setting 
} from '../actions/header-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    layerPanelShow:true,
    modulesPanelShow:true,
    settingPanelShow:true
})

export default (state=initialState,action)=>{
    switch (action.type){
        case show_layer:{
            const result = state.set("layerPanelShow",action.data)
            return result
        }

        case show_modules:{
            const result = state.set("modulesPanelShow",action.data)
            return result
        }

        case show_visualist:{
            const result = state.set("visualistPanelShow",action.data)
            return result
        }

        case show_setting:{
            const result = state.set("settingPanelShow",action.data)
            return result
        }

        default:
            return state
    }
}