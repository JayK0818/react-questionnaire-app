import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './layout.module.scss'

const { Header, Content, Footer } = Layout

const BaseLayout = () => {
  return (
    <Layout>
      <Header className={styles.header}>
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        React问卷@2024 Powered By React and AntD
      </Footer>
    </Layout>
  )
}
export default BaseLayout