import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { Typography } from 'antd'
import styles from './layout.module.scss'
import { useNavigate } from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const BaseLayout: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <Header className={styles.header}>
        <div
          className={styles.title_wrapper}
        >
          <Title
            level={4}
            className={styles.title}
            onClick={() => navigate('/')}
          >
            <i className={styles.icon}><FormOutlined /></i>
            React问卷
          </Title>
        </div>
        <div className={styles.user_wrapper}>登录</div>
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        React问卷@2024 - Powered By React and AntD
      </Footer>
    </Layout>
  )
}
export default BaseLayout