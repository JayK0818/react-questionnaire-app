import React from 'react'
import type { QuestionnaireParagraphProps } from '../interface/index'
import { Typography } from 'antd'
import styles from '../index.module.scss'

const { Paragraph, Title } = Typography

const defaultQuestionnaireParagraphProps: Required<QuestionnaireParagraphProps> = {
  title: '段落标题',
  text: '一段文本',
  isCenter: false
}

// 段落组件
const QuestionnaireParagraph: React.FC<QuestionnaireParagraphProps> = (props) => {
  const { text, isCenter, title } = { ...defaultQuestionnaireParagraphProps, ...props }
  return (
    <React.Fragment>
      <Title
        level={5}
        className={ styles['component-title'] }
      >{ title }</Title>
      <Paragraph
        style={{
          textAlign: isCenter ? 'center' : 'start',
          marginBottom: 0
        }}
        >{text}</Paragraph>
    </React.Fragment>
  )
}

export {
  defaultQuestionnaireParagraphProps
}

export default QuestionnaireParagraph