import React from 'react'
import { Input, Typography } from 'antd'
import type { QuestionnaireTextareaProps } from '../interface/index'

const { TextArea } = Input
const { Paragraph } = Typography

const defaultQuestionnaireTextareaProps: QuestionnaireTextareaProps = {
  title: '多行输入框标题',
  placeholder: '请输入文本...'
}

const QuestionnaireTextArea: React.FC<QuestionnaireTextareaProps> = (props) => {
  const { title, placeholder } = { ...defaultQuestionnaireTextareaProps, ...props }
  return (
    <React.Fragment>
      <Paragraph>{title}</Paragraph>
      <TextArea
        placeholder={placeholder}
        style={{
          resize: 'none',
          height: 60
        }}
      />
    </React.Fragment>
  )
}

export default QuestionnaireTextArea