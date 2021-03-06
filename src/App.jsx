import React, {Component} from "react"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login"
import MenuLink from "./components/MenuLink"
import NotFound from './components/NotFound'

export default class App extends Component {
  render() {
    // switch是使用了，就短路，不往下繼續匹配
    return (
      <Router>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">
                  好運用戶管理系統
                </div>
              </div>
              <ul className="nav navbar-nav">
                <MenuLink label="首頁" to="/home"/>
                <MenuLink label="用戶管理" to="/user"/>
                <MenuLink label="個人設置" to="/profile"/>
                {/* <li><Link to="/home">首頁</Link></li> */}
                {/* <li><Link to="/user">用戶管理</Link></li> */}
                {/* <li><Link to="/profile">個人設置</Link></li> */}
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Switch>
                  <Route path="/" exact render={props=><h1>頭部</h1>}></Route>
                  <Route path="/home" component= {Home}/>
                  <Route path="/user" component= {User}/>
                  {/* 路由保護 <Route path="/profile" component= {Profile}/>*/}
                  <ProtectedRoute path='/profile' component= {Profile}/>
                  <Route path="/login" component={Login}/>
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}