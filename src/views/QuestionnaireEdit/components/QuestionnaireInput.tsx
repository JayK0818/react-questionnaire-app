import styles from '../index.module.scss'
/**
 * @description 用户输入文件
*/
import React from 'react'
import type { QuestionnaireInputProps } from '../interface/index'
import { Typography, Input } from 'antd'

const { Title } = Typography

const defaultQuestionnaireInputProps: Required<QuestionnaireInputProps> = {
  title: '输入框标题',
  placeholder: '请输入文本...',
  disabled: true
}

const QuestionnaireInput: React.FC<QuestionnaireInputProps> = (props) => {
  const { title, placeholder, disabled } = { ...defaultQuestionnaireInputProps, ...props }
  return (
    <React.Fragment>
      { disabled && <div className={ styles['disabled-mask'] }></div> }
      <div>
        <Title
          className={ styles['component-title'] }
          level={5}
        >{title}</Title>
        <Input
          placeholder={placeholder}
        />
      </div>
    </React.Fragment>
  )
}

export {
  defaultQuestionnaireInputProps
}

export default QuestionnaireInput