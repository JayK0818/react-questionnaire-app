import React from 'react'
import { Input, Typography } from 'antd'
import type { QuestionnaireTextareaProps } from '../interface/index'
import styles from '../index.module.scss'

const { TextArea } = Input
const { Paragraph } = Typography

const defaultQuestionnaireTextareaProps: Required<QuestionnaireTextareaProps> = {
  title: '多行输入框标题',
  placeholder: '请输入文本...',
  disabled: false
}

const QuestionnaireTextArea: React.FC<QuestionnaireTextareaProps> = (props) => {
  const { title, placeholder, disabled } = { ...defaultQuestionnaireTextareaProps, ...props }
  return (
    <React.Fragment>
      <div className={ styles['disabled-mask'] }></div>
      <Paragraph>{title}</Paragraph>
      <TextArea
        placeholder={placeholder}
        style={{
          resize: 'none',
          height: 60
        }}
        disabled={disabled}
      />
    </React.Fragment>
  )
}

export {
  defaultQuestionnaireTextareaProps
}

export default QuestionnaireTextArea