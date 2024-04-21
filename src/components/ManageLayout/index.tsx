import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Button, Space } from 'antd'
import styles from './layout.module.scss'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'

const { Sider, Content } = Layout

const ManageLayout: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sidebar}
      >
        <Space direction={'vertical'} size={'middle'}>
          <Button
            type={'primary'}
            icon={<PlusOutlined />}
            className={styles.create_button}
          >创建问卷</Button>
          <Button
            icon={<BarsOutlined />}
            onClick={() => navigate('list')}
            type={ location.pathname.includes('list') ? 'default' : 'text' }
          >我的问卷</Button>
          <Button
            icon={<StarOutlined />}
            onClick={() => navigate('star')}
            type={ location.pathname.includes('star') ? 'default' : 'text' }
          >收藏问卷</Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => navigate('trash')}
            type={ location.pathname.includes('trash') ? 'default' : 'text' }
            >回收站</Button>
        </Space>
      </Sider>
      <Content>
        <Outlet/>
      </Content>
    </Layout>
  )
}

export default ManageLayout