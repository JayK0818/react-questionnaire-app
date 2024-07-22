/**
 * @description 用户输入文件
*/
import React from 'react'
import type { QuestionnaireInputProps } from '../interface/index'
import { Typography, Input } from 'antd'

const { Paragraph } = Typography

const defaultQuestionnaireInputProps: Required<QuestionnaireInputProps> = {
  title: '输入框标题',
  placeholder: '请输入文本...',
  disabled: false
}

const QuestionnaireInput: React.FC<QuestionnaireInputProps> = (props) => {
  const { title, placeholder, disabled = false } = { ...defaultQuestionnaireInputProps, ...props }
  return (
    <div>
      <Paragraph>{ title }</Paragraph>
      <Input placeholder={placeholder} disabled={ disabled } />
    </div>
  )
}

export {
  defaultQuestionnaireInputProps
}

export default QuestionnaireInput