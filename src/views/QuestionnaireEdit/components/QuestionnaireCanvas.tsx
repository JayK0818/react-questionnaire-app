import React from 'react'
import { selectComponentList } from '@/store/component'
import { useAppSelector } from '@/store/hooks'
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

const QuestionnaireCanvas: React.FC = () => {
  const componentList = useAppSelector(selectComponentList)
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
  return (
    <React.Fragment>
      {
        componentList.map(componentProps => (
          <div className={styles['canvas-component-container']} key={componentProps.id}>
            { getComponent(componentProps) }
          </div>
        ))
      }
    </React.Fragment>
  )
}

export default QuestionnaireCanvas