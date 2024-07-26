import styles from '../index.module.scss'
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
  const { title, placeholder, disabled } = { ...defaultQuestionnaireInputProps, ...props }
  return (
    <React.Fragment>
      { disabled && <div className={ styles['disabled-mask'] }></div> }
      <div>
        <Paragraph>{ title }</Paragraph>
        <Input
          placeholder={placeholder}
          disabled={ disabled }
        />
      </div>
    </React.Fragment>
  )
}

export {
  defaultQuestionnaireInputProps
}

export default QuestionnaireInput