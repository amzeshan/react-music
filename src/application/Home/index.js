import React from 'react'
import {renderRoutes} from 'react-router-config'
import {Top,Tab,TabItem} from './style'

//路由跳转
import {NavLink} from 'react-router-dom'

function Home(props){
    // console.log('props=',props);
    const {route} =props
 return (
    <div>
        <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">虾米音乐</span>
        <span className="iconfont search">&#xe62b;</span>
        </Top>
        <Tab>
            <NavLink to='/recommend'activeClassName="selected"><TabItem>推荐</TabItem></NavLink>
            <NavLink to='/singers' activeClassName="selected"><TabItem>歌手</TabItem></NavLink>
            <NavLink to='/rank' activeClassName="selected"><TabItem>排行榜</TabItem></NavLink>
        </Tab>
        {renderRoutes(route.routes)}
    </div>
     
     
 )
}
export default React.memo(Home)