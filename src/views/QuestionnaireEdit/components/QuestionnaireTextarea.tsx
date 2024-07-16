import React from 'react'
import { Input, Typography } from 'antd'
import styles from '../index.module.scss'
import type { QuestionnaireTextareaProps } from '../interface/index'

const { TextArea } = Input
const { Title } = Typography

const defaultQuestionnaireTextareaProps: QuestionnaireTextareaProps = {
  title: '多行输入框标题',
  placeholder: '请输入文本...'
}

const QuestionnaireTextArea: React.FC<QuestionnaireTextareaProps> = (props) => {
  const { title, placeholder } = { ...defaultQuestionnaireTextareaProps, ...props }
  return (
    <div className={styles['no-click']}>
      <Title level={5}>{title}</Title>
      <TextArea
        placeholder={placeholder}
        style={{
          resize: 'none',
          height: 60
        }}
      />
    </div>
  )
}

export default QuestionnaireTextArea