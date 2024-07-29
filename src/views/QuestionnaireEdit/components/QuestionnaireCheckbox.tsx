import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { Typography, Space, Checkbox } from 'antd'
import { QuestionnaireCheckboxProps } from '../interface/index'
import styles from '../index.module.scss'

const { Title } = Typography

/**
 * @description 默认值
*/
const defaultQuestionnaireCheckboxProps: Required<QuestionnaireCheckboxProps> = {
  title: '多选标题',
  isVertical: false,
  disabled: true,
  options: [
    {
      label: '选项一',
      value: nanoid(),
      checked: false
    },
    {
      label: '选项二',
      value: nanoid(),
      checked: false
    },
    {
      label: '选项三',
      value: nanoid(),
      checked: false
    }
  ]
}

const QuestionnaireCheckbox: React.FC<QuestionnaireCheckboxProps> = (props) => {
  const { title, options, isVertical, disabled } = { ...defaultQuestionnaireCheckboxProps, ...props }
  return (
    <React.Fragment>
      { disabled && <div className={ styles['disabled-mask'] }></div> }
      <div>
        <Title
          level={ 5 }
          className={ styles['component-title'] }
        >{ title }</Title>
        <Space
          direction={ isVertical ? 'vertical' : 'horizontal' }
        >
          {options.length > 0 && options.map(option => (
            <Checkbox
              checked={option.checked}
              value={option.value}
              key={option.value}
            >{ option.label }</Checkbox>
          )) }
        </Space>
      </div>
    </React.Fragment>
  )
}

export default QuestionnaireCheckbox

export {
  defaultQuestionnaireCheckboxProps
}