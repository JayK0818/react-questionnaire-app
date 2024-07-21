import React from 'react'
import type { QuestionnaireParagraphProps } from '../interface/index'
import { Typography } from 'antd'

const { Paragraph } = Typography

const defaultQuestionnaireParagraphProps: Required<QuestionnaireParagraphProps> = {
  text: '一段文本',
  isCenter: false
}

// 段落组件
const QuestionnaireParagraph: React.FC<QuestionnaireParagraphProps> = (props) => {
  const { text, isCenter } = { ...defaultQuestionnaireParagraphProps, ...props }
  return (
    <Paragraph
      style={{
        textAlign: isCenter ? 'center' : 'start',
        marginBottom: 0
      }}
    >{text}</Paragraph>
  )
}

export default QuestionnaireParagraph