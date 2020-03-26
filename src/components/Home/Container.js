import React,{ Component } from 'react'
import { Route } from 'react-router-dom'
import HistoryVisual from './HistoryVisual'
import MenuList from "./MenuList";
import RoleList from "./RoleList";
import UserList from "./UserList";

class Container extends Component{
    componentDidMount(){
        
    }
    render(){
        return (
            <div className="page-container">
                <Route exact path="/home" component={HistoryVisual}/>
                <Route path="/home/menulist" component={MenuList} />
                <Route path="/home/userlist" component={UserList} />
                <Route path="/home/rolelist" component={RoleList} />
            </div>
        );
    }
}
export default Container