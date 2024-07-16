import React from 'react'
import { Typography } from 'antd'
import styles from '../index.module.scss'
import { QuestionnaireTitleProps } from '../interface/index'

const defaultQuestionnaireTitleProps: QuestionnaireTitleProps = {
  title: '问卷标题',
  level: 4,
  isCenter: false
}
const { Title } = Typography

const QuestionnaireTitle: React.FC<QuestionnaireTitleProps> = (props) => {
  const { title, isCenter } = { ...defaultQuestionnaireTitleProps, ...props }
  return (
    <div
      className={styles['no-click']}
      style={{
        textAlign: isCenter ? 'center' : 'left'
      }}
    >
      <Title
        level={5}
      >{ title }</Title>
    </div>
  )
}

export default QuestionnaireTitle