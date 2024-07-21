import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { Typography, Space, Checkbox } from 'antd'
import { QuestionnaireCheckboxProps } from '../interface/index'

const { Paragraph } = Typography

/**
 * @description 默认值
*/
const defaultQuestionnaireCheckboxProps: Required<QuestionnaireCheckboxProps> = {
  title: '用户多选',
  isVertical: false,
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
  const { title, options, isVertical } = { ...defaultQuestionnaireCheckboxProps, ...props }
  return (
    <div>
      <Paragraph>{title}</Paragraph>
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
  )
}

export default QuestionnaireCheckbox