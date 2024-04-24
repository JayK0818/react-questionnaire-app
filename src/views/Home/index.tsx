import React from 'react'
import { Button, Typography } from 'antd'
import styles from './home.module.scss'
import { useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <Title>React问卷调查 | 在线投票</Title>
      <Paragraph>已创建问卷190份, 已发布问卷240份, 收到问卷100份</Paragraph>
      <div style={{ paddingTop: 10 }}>
        <Button
          type='primary'
          size={'large'}
          onClick={() => navigate('/manage/list')}
        >开始使用</Button>
      </div>
    </div>
  )
}

export default Home