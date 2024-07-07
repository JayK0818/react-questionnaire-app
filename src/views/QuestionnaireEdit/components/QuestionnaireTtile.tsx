import React from 'react'
import { Typography } from 'antd'
import type { QuestionnaireTitleProps } from '../interface/index'

const defaultQuestionnaireTitleProps: QuestionnaireTitleProps = {
  title: '问卷标题',
  level: 1,
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
    >{ title }</Title>
  )
}

export default QuestionnaireTitle