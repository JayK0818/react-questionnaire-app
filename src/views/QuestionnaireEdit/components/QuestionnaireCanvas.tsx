import React from 'react'
import { selectComponentList } from '@/store/component'
import { useAppSelector } from '@/store/hooks'
import QuestionnaireInput from './QuestionnaireInput'
import QuestionnaireTitle from './QuestionnaireTtile'
import QuestionnaireTextArea from './QuestionnaireTextarea'
import QuestionnaireParagraph from './QuestionnaireParagraph'
import { ComponentTypeEnum } from "@/interface/enum";
import type {
  QuestionnaireTitleProps, QuestionnaireInputProps,
  QuestionnaireTextareaProps, QuestionnaireParagraphProps
} from '../interface/index'

const QuestionnaireCanvas: React.FC = () => {
  const componentList = useAppSelector(selectComponentList)
  return (
    <React.Fragment>
      {
        componentList.map(c => {
          switch (c.type) {
            case ComponentTypeEnum.input:
              return <QuestionnaireInput {...(c.props as QuestionnaireInputProps)} />
            case ComponentTypeEnum.title:
              return <QuestionnaireTitle {...(c.props as QuestionnaireTitleProps)} />
            case ComponentTypeEnum.textarea:
              return <QuestionnaireTextArea {...(c.props as QuestionnaireTextareaProps)} />
            case ComponentTypeEnum.paragraph:
              return <QuestionnaireParagraph {...(c.props as QuestionnaireParagraphProps)} />
            default:
              return null
          }
        })
      }
    </React.Fragment>
  )
}

export default QuestionnaireCanvas