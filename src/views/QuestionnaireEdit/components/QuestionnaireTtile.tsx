import React from 'react'
import { Typography } from 'antd'
import styles from '../index.module.scss'
import { QuestionnaireTitleProps } from '../interface/index'
import classname from 'classnames'

const defaultQuestionnaireTitleProps: QuestionnaireTitleProps = {
  title: '问卷标题',
  level: 4,
  isCenter: true
}
const { Title } = Typography

const QuestionnaireTitle: React.FC<QuestionnaireTitleProps> = (props) => {
  return (
    <div
      className={
      classname([styles['no-click'], styles['component-container']])
    }>
      <Title
        level={5}
      >问卷标题</Title>
    </div>
  )
}

export default QuestionnaireTitle