import React from 'react'
import { Input, Typography } from 'antd'
import type { QuestionnaireTextareaProps } from '../interface/index'
import styles from '../index.module.scss'

const { TextArea } = Input
const { Title } = Typography

const defaultQuestionnaireTextareaProps: Required<QuestionnaireTextareaProps> = {
  title: '多行输入框',
  placeholder: '请输入文本...',
  disabled: true
}

const QuestionnaireTextArea: React.FC<QuestionnaireTextareaProps> = (props) => {
  const { title, placeholder, disabled } = { ...defaultQuestionnaireTextareaProps, ...props }
  return (
    <React.Fragment>
      { disabled && <div className={ styles['disabled-mask'] }></div> }
      <Title
        level={5}
        className={ styles['component-title'] }
      >{title}</Title>
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

export {
  defaultQuestionnaireTextareaProps
}

export default QuestionnaireTextArea