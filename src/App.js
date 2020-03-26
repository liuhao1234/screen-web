import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { PersistGate } from 'redux-persist/integration/react'
import zhCN from 'antd/es/locale/zh_CN';
import storeCallback from './store';
import PageRouter from './routers';
import 'antd/dist/antd.css';
import './static/iconfont/iconfont.css'
import './static/style/index.styl';
const { store, persistor } = storeCallback()
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={zhCN}>
          <PageRouter/>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
