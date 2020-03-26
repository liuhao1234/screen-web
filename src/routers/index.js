import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ScreenEditor from '../pages/ScreenEditor'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
export default ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/editor" render={(params)=>{
                    const { path } = params.match;
                    const token = sessionStorage.getItem("beautifulGirl")
                    if(token){
                        return <Switch>
                            <Route path={path} component={ScreenEditor} />
                        </Switch>
                    }else{
                        return <Redirect to="/" />
                    }
                }} />
                <Route path="/home" render={(params)=>{
                    const { path } = params.match;
                    const token = sessionStorage.getItem("beautifulGirl")
                    if(token){
                        return <Switch>
                            <Route path={path} component={HomePage} />
                        </Switch>
                    }else{
                        return <Redirect to="/" />
                    }
                }} />
            </Switch>
        </Router>
    )
} 