import React from 'react'
import type { QuestionnaireInputProps } from '../interface/index'
import { Typography, Input } from 'antd'
import styles from '../index.module.scss'

const { Title } = Typography

const questionnaireInputDefaultProps: QuestionnaireInputProps = {
  title: '用户输入',
  placeholder: '请输入...'
}

const QuestionnaireInput: React.FC<QuestionnaireInputProps> = (props) => {
  const { title, placeholder } = { ...questionnaireInputDefaultProps, ...props }
  return (
    <div className={styles['no-click']}>
      <Title level={5}>{ title }</Title>
      <Input
        placeholder={placeholder}
      />
    </div>
  )
}

export default QuestionnaireInput