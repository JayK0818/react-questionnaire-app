import React from 'react'
import type { QuestionnaireInputProps } from '../interface/index'
import { Typography, Input } from 'antd'
import styles from '../index.module.scss'
import classname from 'classnames'

const { Title } = Typography

const QuestionnaireInput: React.FC<QuestionnaireInputProps> = (props) => {
  return (
    <div className={
      classname([styles['no-click'], 'component-container'])
    }>
      <Title level={5}>用户输入</Title>
      <Input placeholder={ '请输入文本' } />
    </div>
  )
}

export default QuestionnaireInput