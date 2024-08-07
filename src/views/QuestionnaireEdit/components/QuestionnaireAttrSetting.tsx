import React from 'react'
import { QuestionnaireEditTabEnum } from '../interface/index'
import { Tabs, Empty, Form } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import CheckboxForm from './CheckboxForm'
import RadioForm from './RadioForm'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectActiveComponent } from '@/store/component'
import { ComponentTypeEnum } from '@/interface/enum'

const QuestionnaireAttr: React.FC = () => {
  // const dispatch = useAppDispatch()
  const componentProps = useAppSelector(selectActiveComponent)
  const getForm = () => {
    if (!componentProps) {
      return null
    }
    switch (componentProps.type) {
      case ComponentTypeEnum.checkbox:
        return <CheckboxForm fe_id={componentProps.fe_id} />
      case ComponentTypeEnum.radio:
        return <RadioForm fe_id={ componentProps.fe_id } />
    }
  }
  return (
    <div>
      {
        componentProps
          ? (<React.Fragment>
              { getForm() }
            </React.Fragment>)
          : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
    </div>
  )
}

const QuestionnaireSetting: React.FC = () => {
  return (
    <div>页面设置</div>
  )
}

/**
 * @description 组件的属性和设置
*/
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