import React from 'react'
import type { QuestionnaireInputProps } from '../interface/index'
import { Typography, Input } from 'antd'

const { Title } = Typography

const questionnaireInputDefaultProps: QuestionnaireInputProps = {
  title: '问卷标题',
  placeholder: '请输入...'
}

const QuestionnaireInput: React.FC<QuestionnaireInputProps> = (props) => {
  const { title, placeholder } = { ...questionnaireInputDefaultProps, ...props }
  return (
    <React.Fragment>
      <Title>{ title }</Title>
      <Input
        placeholder={placeholder}
        style={{
          pointerEvents: 'none'
        }}
      />
    </React.Fragment>
  )
}

export default QuestionnaireInput