import React from 'react';
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App;
