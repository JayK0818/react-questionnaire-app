import React from 'react'
import type { QuestionnaireRadioProps } from '../interface/index'
import { nanoid } from 'nanoid'
import { Typography, Radio, Space } from 'antd'
import styles from '../index.module.scss'

const { Title } = Typography

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
  disabled: true
}

const QuestionnaireRadio: React.FC<QuestionnaireRadioProps> = (props) => {
  const { title, options = [], isVertical, value, disabled } = { ...defaultQuestionnaireRadioProps, ...props }
  return (
    <div>
      { disabled && <div className={ styles['disabled-mask'] }></div>  }
      <Title
        level={5}
        className={ styles['component-title'] }
      >{title}</Title>
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

export {
  defaultQuestionnaireRadioProps
}

export default QuestionnaireRadio