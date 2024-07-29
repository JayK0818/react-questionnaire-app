import React from 'react'
import { Tabs, Typography, Empty } from 'antd'
import { QuestionnaireEditTabEnum, GroupTypeEnum } from '../interface/index'
import { UnorderedListOutlined, AppstoreOutlined, LockOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import styles from '../index.module.scss'
import QuestionnaireTitle, { defaultQuestionnaireTitleProps } from './QuestionnaireTtile'
import QuestionnaireParagraph, { defaultQuestionnaireParagraphProps } from './QuestionnaireParagraph'
import QuestionnaireInput, { defaultQuestionnaireInputProps } from './QuestionnaireInput'
import QuestionnaireTextArea, { defaultQuestionnaireTextareaProps } from './QuestionnaireTextarea'
import QuestionnaireDescription, { defaultQuestionnaireDescriptionProps } from './QuestionnaireDescription'
import QuestionnaireRadio, { defaultQuestionnaireRadioProps } from './QuestionnaireRadio'
import QuestionnaireCheckbox, { defaultQuestionnaireCheckboxProps } from './QuestionnaireCheckbox'
import { ComponentTypeEnum } from '@/interface/enum'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectComponentList, increment } from '@/store/component'
import { nanoid } from '@reduxjs/toolkit'

const { Title } = Typography
/**
 * @description 组件列表
*/
const componentGroupList = [
  {
    label: '文本显示',
    value: GroupTypeEnum.text,
    children: [
      {
        element: <QuestionnaireDescription/>,
        type: ComponentTypeEnum.description
      },
      {
        element: <QuestionnaireTitle disabled={true} />,
        type: ComponentTypeEnum.title
      },
      {
        element: <QuestionnaireParagraph/>,
        type: ComponentTypeEnum.paragraph
      } 
    ]
  },
  {
    label: '用户输入',
    value: GroupTypeEnum.user_type,
    children: [
      {
        element: <QuestionnaireInput/>,
        type: ComponentTypeEnum.input
      },
      {
        element: <QuestionnaireTextArea/>,
        type: ComponentTypeEnum.textarea
      }
    ]
  },
  {
    label: '用户选择',
    value: GroupTypeEnum.user_select,
    children: [
      {
        element: <QuestionnaireRadio/>,
        type: ComponentTypeEnum.radio
      },
      {
        element: <QuestionnaireCheckbox/>,
        type: ComponentTypeEnum.checkbox
      }
    ]
  }
]

/**
 * @description 组件列表
*/
const Library: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleSelectComponent = (type: ComponentTypeEnum, groupType: GroupTypeEnum): void => {
    let props: any = {}
    switch (type) {
      case ComponentTypeEnum.title:
        props = { ...defaultQuestionnaireTitleProps }
        break
      case ComponentTypeEnum.paragraph:
        props = { ...defaultQuestionnaireParagraphProps }
        break
      case ComponentTypeEnum.input:
        props = {
          ...defaultQuestionnaireInputProps,
        }
        break
      case ComponentTypeEnum.radio:
        props = {
          ...defaultQuestionnaireRadioProps,
        }
        break
      case ComponentTypeEnum.checkbox:
        props = {
          ...defaultQuestionnaireCheckboxProps,
        }
        break
      case ComponentTypeEnum.description:
        props = { ...defaultQuestionnaireDescriptionProps }
        break
      case ComponentTypeEnum.textarea:
        props = {
          ...defaultQuestionnaireTextareaProps,
        }
        break
    }
    dispatch(increment({
      id: nanoid(),
      groupType,
      type,
      isLocked: false,
      isVisible: true,
      props
    }))
  }
  return (<div className={styles['layer-card']}>
    {
      componentGroupList.map((group) => (
        <React.Fragment key={group.value}>
          <Title
            level={5}
          >{group.label}</Title>
          {
            group.children.map((child, i) => (
              <div
                key={i}
                className={styles['component-container']}
                onClick={ () => handleSelectComponent(child.type, group.value) }
              >
                { child.element }
              </div>
            ))
          }
        </React.Fragment>
      ))
    }
  </div>)
}

/**
 * @description 图层列表
*/
const Layer: React.FC = () => {
  const componentList = useAppSelector(selectComponentList)
  return (<div>
    {componentList.length > 0
      ? (
        componentList.map(item => (
          <div
            key={item.id}
            className={ styles['layer-item'] }
          >
            <div className={styles['flex-1']}>
              { (item.props as any)?.title }
            </div>
            <div className={styles['icon-box']}>
              <span className={styles['icon']}>
                <EyeInvisibleOutlined/>
              </span>
              <span className={styles['icon']}>
                <LockOutlined/>
              </span>
            </div>
          </div>
        ))
      ): <Empty image = {Empty.PRESENTED_IMAGE_SIMPLE}/> }
  </div>)
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