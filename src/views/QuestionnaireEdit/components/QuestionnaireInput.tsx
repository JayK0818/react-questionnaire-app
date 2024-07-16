/**
 * @description 用户输入文件
*/

import React from 'react'
import type { QuestionnaireInputProps } from '../interface/index'
import { Typography, Input } from 'antd'
import styles from '../index.module.scss'

const { Title } = Typography

const defaultQuestionnaireInputProps: QuestionnaireInputProps = {
  title: '输入框标题',
  placeholder: '请输入文本...'
}

const QuestionnaireInput: React.FC<QuestionnaireInputProps> = (props) => {
  const { title, placeholder } = { ...defaultQuestionnaireInputProps, ...props }
  return (
    <div className={ styles['no-click'] }>
      <Title level={5}>{ title }</Title>
      <Input placeholder={ placeholder } />
    </div>
  )
}

export default QuestionnaireInput