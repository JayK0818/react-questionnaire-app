import React from 'react'
import { Button, Typography } from 'antd'
import styles from './home.module.scss'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title>React问卷调查</Title>
      <Paragraph>已创建问卷190份, 已发布问卷240份, 收到问卷100份</Paragraph>
      <div>
        <Button
          type='primary'
          size={'large'}
        >开始使用</Button>
      </div>
    </div>
  )
}

export default Home