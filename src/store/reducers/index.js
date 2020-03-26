import { combineReducers } from 'redux';
import headerReducer from './header-reducer';
import loginReducer from './login-reducer';
import screenReducer from './screen-reducer';
import settingReducer from './setting-reducer';
import editorReducer from './editor-reducer'
export default combineReducers({
    headerState:headerReducer,
    loginState:loginReducer,
    screenState:screenReducer,
    settingState:settingReducer,
    editorState:editorReducer
});