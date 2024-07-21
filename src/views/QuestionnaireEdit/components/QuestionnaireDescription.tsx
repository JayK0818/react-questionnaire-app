import React from 'react'
import type { QuestionnaireDescriptionProps } from '../interface/index'
import { Typography } from 'antd'

const defaultProps: Required<QuestionnaireDescriptionProps> = {
  title: '这是一个段落',
  description : '段落描述...'
}

const { Title, Paragraph } = Typography
 
const QuestionnaireDescription: React.FC<QuestionnaireDescriptionProps> = (props) => {
  const { title, description } = { ...defaultProps, ...props }
  // 新增换行
  const descriptionList = description.split('\n').filter(Boolean)
  return (
    <div>
      <Title level={5}>{title}</Title>
      <Paragraph>
        {descriptionList.length > 0 && descriptionList.map((desc, i) => (
          <div key={i}>{ desc.trim() }</div>
        )) }
      </Paragraph>
    </div>
  )
}

export default QuestionnaireDescription