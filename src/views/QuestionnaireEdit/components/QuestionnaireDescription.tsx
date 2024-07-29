import React from 'react'
import type { QuestionnaireDescriptionProps } from '../interface/index'
import { Typography } from 'antd'
import styles from '../index.module.scss'

const defaultQuestionnaireDescriptionProps: Required<QuestionnaireDescriptionProps> = {
  title: '这是一个段落',
  description : '段落描述...'
}

const { Title, Paragraph } = Typography
 
const QuestionnaireDescription: React.FC<QuestionnaireDescriptionProps> = (props) => {
  const { title, description } = { ...defaultQuestionnaireDescriptionProps, ...props }
  // 新增换行
  const descriptionList = description.split('\n').filter(Boolean)
  return (
    <div>
      <Title
        level={5}
        className={ styles['component-title'] }
      >{title}</Title>
      <Paragraph>
        {descriptionList.length > 0 && descriptionList.map((desc, i) => (
          <div key={i}>{ desc.trim() }</div>
        )) }
      </Paragraph>
    </div>
  )
}

export {
  defaultQuestionnaireDescriptionProps
}

export default QuestionnaireDescription