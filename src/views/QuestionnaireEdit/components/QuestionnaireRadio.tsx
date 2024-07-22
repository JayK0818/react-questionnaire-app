import React from 'react'
import type { QuestionnaireRadioProps } from '../interface/index'
import { nanoid } from 'nanoid'
import { Typography, Radio, Space } from 'antd'

const { Paragraph } = Typography

// 默认选项
const defaultQuestionnaireRadioProps: Required<QuestionnaireRadioProps> = {
  title: '单选标题',
  isVertical: false,
  options: [
    {
      label: '选项一',
      value: nanoid()
    },
    {
      label: '选项二',
      value: nanoid()
    },
    {
      label: '选项三',
      value: nanoid()
    }
  ],
  value: '',
  disabled: false
}

const QuestionnaireRadio: React.FC<QuestionnaireRadioProps> = (props) => {
  const { title, options = [], isVertical, value, disabled } = { ...defaultQuestionnaireRadioProps, ...props }
  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <Radio.Group value={ value }>
        <Space direction={ isVertical ? 'vertical' : 'horizontal' }>
          {options.map(option => (
            <Radio
              value={option.value}
              key={option.value}
              disabled={ disabled }
            >{option.label}</Radio>
          )) }
        </Space>
      </Radio.Group>
    </div>
  )
}

export {
  defaultQuestionnaireRadioProps
}

export default QuestionnaireRadio