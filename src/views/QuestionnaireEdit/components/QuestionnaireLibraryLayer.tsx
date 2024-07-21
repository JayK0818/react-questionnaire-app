import React from 'react'
import { Tabs, Typography } from 'antd'
import { QuestionnaireEditTabEnum, GroupTypeEnum } from '../interface/index'
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons'
import styles from '../index.module.scss'
import QuestionnaireTitle from './QuestionnaireTtile'
import QuestionnaireParagraph from './QuestionnaireParagraph'
import QuestionnaireInput from './QuestionnaireInput'
import QuestionnaireTextArea from './QuestionnaireTextarea'
import QuestionnaireDescription from './QuestionnaireDescription'
import QuestionnaireRadio from './QuestionnaireRadio'
import QuestionnaireCheckbox from './QuestionnaireCheckbox'

const { Title } = Typography
/**
 * @description 组件列表
*/
const componentGroupList = [
  {
    label: '文本显示',
    value: GroupTypeEnum.text,
    children: [
      QuestionnaireDescription,
      QuestionnaireTitle,
      QuestionnaireParagraph
    ]
  },
  {
    label: '用户输入',
    value: GroupTypeEnum.user_type,
    children: [
      QuestionnaireInput,
      QuestionnaireTextArea
    ]
  },
  {
    label: '用户选择',
    value: GroupTypeEnum.user_select,
    children: [
      QuestionnaireRadio,
      QuestionnaireCheckbox
    ]
  }
]

// 组件列表
const Library: React.FC = () => {
  return (<div className={styles['layer-card']}>
    {
      componentGroupList.map((group) => (
        <React.Fragment key={group.value}>
          <Title
            level={5}
          >{group.label}</Title>
          {
            group.children.map((Component, i) => (
              <div key={ i } className={ styles['component-container'] } >
                <Component/>
              </div>
            ))
          }
        </React.Fragment>
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