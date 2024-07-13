import React from 'react'
import { QuestionnaireEditTabEnum } from '../interface/index'
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'

const QuestionnaireAttr: React.FC = () => {
  return (
    <div>页面属性</div>
  )
}

const QuestionnaireSetting: React.FC = () => {
  return (
    <div>页面设置</div>
  )
}

const QuestionnaireAttrSetting: React.FC = () => {
  return (
    <Tabs
      items={[
        {
          key: QuestionnaireEditTabEnum.attr,
          children: <QuestionnaireAttr />,
          label: '属性',
          icon: <FileTextOutlined/>
        },
        {
          key: QuestionnaireEditTabEnum.setting,
          label: '页面设置',
          children: <QuestionnaireSetting />,
          icon: <SettingOutlined/>
        }
      ]}
    />
  )
}

export default QuestionnaireAttrSetting