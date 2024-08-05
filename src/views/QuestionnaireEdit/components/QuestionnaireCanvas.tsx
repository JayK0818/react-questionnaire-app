import React from 'react'
import { Empty } from 'antd'
import { selectComponentList, selectActiveComponentId, toggleActiveComponent } from '@/store/component'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import QuestionnaireInput from './QuestionnaireInput'
import QuestionnaireTitle from './QuestionnaireTtile'
import QuestionnaireTextArea from './QuestionnaireTextarea'
import QuestionnaireParagraph from './QuestionnaireParagraph'
import QuestionnaireCheckbox from './QuestionnaireCheckbox'
import QuestionnaireRadio from './QuestionnaireRadio'
import QuestionnaireDescription from './QuestionnaireDescription'
import { ComponentTypeEnum } from "@/interface/enum";
import styles from '../index.module.scss'
import type { ComponentListProps } from '../interface'
import classname from 'classnames'

/**
 * @description 组件画板
*/
const QuestionnaireCanvas: React.FC = () => {
  const componentList = useAppSelector(selectComponentList)
  const visibleComponentList = componentList.filter(item => item.isVisible)
  const activeComponentId = useAppSelector(selectActiveComponentId)
  const dispatch = useAppDispatch()
  /**
   * @description 获取当前画布的所有组件
  */
  const getComponent = (componentProps: ComponentListProps) => {
    const { props, type } = componentProps
    switch (type) {
      case ComponentTypeEnum.input:
        return <QuestionnaireInput {...props} />
      case ComponentTypeEnum.title:
        return <QuestionnaireTitle {...props} />
      case ComponentTypeEnum.textarea:
        return <QuestionnaireTextArea {...props} />
      case ComponentTypeEnum.paragraph:
        return <QuestionnaireParagraph {...props} />
      case ComponentTypeEnum.checkbox:
        return <QuestionnaireCheckbox {...props} />
      case ComponentTypeEnum.radio:
        return <QuestionnaireRadio {...props} />
      case ComponentTypeEnum.description:
        return <QuestionnaireDescription {...props} />
      default:
        return null
    }
  }
  /**
   * @description 切换高亮组件
  */
  const handleToggleActiveComponent = (id: string): void => {
    dispatch(toggleActiveComponent(id))
  }
  return (
    <React.Fragment>
      {
        componentList.length === 0
          ? <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={'暂无数据, 请在组件库中添加'}
            />
          : (
            visibleComponentList.length > 0
            ? visibleComponentList.map(componentProps => (
                <div
                  className={
                    classname([
                      styles['canvas-component-container'],
                      activeComponentId === componentProps.fe_id ? styles['active'] : '',
                      componentProps.isLocked ? styles['locked'] : ''
                    ])
                  }
                  key={componentProps.fe_id}
                  onClick={ () => handleToggleActiveComponent(componentProps.fe_id) }
                >
                  { getComponent(componentProps) }
                </div>
              ))
              : <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
          )
      }
    </React.Fragment>
  )
}

export default QuestionnaireCanvas