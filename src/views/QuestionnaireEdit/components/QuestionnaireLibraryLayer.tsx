import React from 'react'
import { Tabs } from 'antd'
import { QuestionnaireEditTabEnum } from '../interface/index'
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons'
import styles from '../index.module.scss'
import QuestionnaireTitle from './QuestionnaireTtile'
import QuestionnaireInput from './QuestionnaireInput'
import QuestionnaireTextArea from './QuestionnaireTextarea'

/**
 * @description 组件列表
*/
const componentList: Array<React.FC> = [
  QuestionnaireTitle,
  QuestionnaireInput,
  QuestionnaireTextArea
]

// 组件列表
const Library: React.FC = () => {
  return (<div className={styles['layer-card']}>
    {
      componentList.map((Component, i) => (
        <div key={i} className={styles['component-container']}>
          <Component/>
        </div>
      ))
    }
  </div>)
}

const Layer: React.FC = () => {
  return (<div>我是图层</div>)
}

const QuestionnaireLibraryLayer: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey={ QuestionnaireEditTabEnum.library }
      items={
        [
          {
            key: QuestionnaireEditTabEnum.library,
            label: '组件库',
            children: <Library />,
            icon: <AppstoreOutlined/>
          },
          {
            key: QuestionnaireEditTabEnum.layer,
            label: '图层',
            children: <Layer />,
            icon: <UnorderedListOutlined/>
          }
        ]
      }
    />
  )
}

export default QuestionnaireLibraryLayer