import React from 'react'
import { Typography } from 'antd'
import styles from './index.module.scss'
import SearchInput from '@/components/SearchInput'

const QuestionnaireList: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography.Title
          level={5}
          className={styles.title}
        >我的问卷</Typography.Title>
        <SearchInput/>
      </div>
    </div>
  )
}

export default QuestionnaireList