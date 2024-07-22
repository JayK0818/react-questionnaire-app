import React from 'react'
import { Typography } from 'antd'
import { QuestionnaireTitleProps } from '../interface/index'

const defaultQuestionnaireTitleProps: QuestionnaireTitleProps = {
  text: '问卷标题',
  level: 4,
  isCenter: false
}
const { Title } = Typography

const QuestionnaireTitle: React.FC<QuestionnaireTitleProps> = (props) => {
  const { text, isCenter } = { ...defaultQuestionnaireTitleProps, ...props }
  return (
    <div
      style={{
        textAlign: isCenter ? 'center' : 'left'
      }}
    >
      <Title
        level={5}
      >{ text }</Title>
    </div>
  )
}

export {
  defaultQuestionnaireTitleProps
}

export default QuestionnaireTitle