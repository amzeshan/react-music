import React from 'react';

//导入样式
import {GlobalStyle} from './style'
//导入字体
import {IconStyle} from './assets/iconfont/iconfont'

import {renderRoutes} from "react-router-config"

import routes from './routes'

import {HashRouter} from 'react-router-dom'

import store from './store/index'

import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <HashRouter>
     <GlobalStyle></GlobalStyle>
     <IconStyle></IconStyle>
     {/* <i className="iconfont">&#xe62b;</i> */}
     { renderRoutes (routes) }
     </HashRouter>
     </Provider>
  );
}

export default App;
