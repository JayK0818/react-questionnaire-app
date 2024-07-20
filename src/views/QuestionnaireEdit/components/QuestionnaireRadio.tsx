import React from 'react'
import type { QuestionnaireRadioProps } from '../interface/index'
import { Typography, Radio, Space } from 'antd'

const { Paragraph } = Typography

// 默认选项
const defaultRadioProps: QuestionnaireRadioProps = {
  title: '单选标题',
  isVertical: false,
  options: [
    {
      label: '选项一',
      value: 'item1'
    },
    {
      label: '选项二',
      value: 'item2'
    },
    {
      label: '选项三',
      value: 'item3'
    }
  ],
  value: ''
}

const QuestionnaireRadio: React.FC<QuestionnaireRadioProps> = (props) => {
  const { title, options = [], isVertical, value } = { ...defaultRadioProps, ...props }
  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <Radio.Group value={ value }>
        <Space direction={ isVertical ? 'vertical' : 'horizontal' }>
          {options.map(option => (
            <Radio
              value={option.value}
              key={option.value}
            >{option.label}</Radio>
          )) }
        </Space>
      </Radio.Group>
    </div>
  )
}

export default QuestionnaireRadio