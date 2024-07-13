import React from 'react'
import { Typography } from 'antd'
import type { QuestionnaireTitleProps } from '../interface/index'
import styles from '../index.module.scss'

const defaultQuestionnaireTitleProps: QuestionnaireTitleProps = {
  title: '问卷标题',
  level: 4,
  isCenter: true
}
const { Title } = Typography

const QuestionnaireTitle: React.FC<QuestionnaireTitleProps> = (props) => {
  const { title, isCenter, level } = {...defaultQuestionnaireTitleProps, ...props}
  return (
    <Title
      level={level}
      style={{
        marginBottom: 0,
        textAlign: isCenter ? 'center' : 'left'
      }}
      className={styles['no-click']}
    >{ title }</Title>
  )
}

export default QuestionnaireTitle