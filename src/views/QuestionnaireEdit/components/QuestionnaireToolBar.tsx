import React from 'react'
import styles from '../index.module.scss'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

const QuestionnaireToolBar: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <Button
          icon={ <LeftOutlined/> }
          type={'link'}
        >返回</Button>
      </div>
    </div>
  )
}

export default QuestionnaireToolBar