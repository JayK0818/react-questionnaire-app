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
    <div>
      {
        componentList.map((c, i) => {
          switch (c.type) {
            case ComponentTypeEnum.input:
              return <QuestionnaireInput
                {...(c.props as QuestionnaireInputProps)}
                key={ c.id }
              />
            case ComponentTypeEnum.title:
              return <QuestionnaireTitle
                {...(c.props as QuestionnaireTitleProps)}
                key={ c.id }
              />
            case ComponentTypeEnum.textarea:
              return <QuestionnaireTextArea
                {...(c.props as QuestionnaireTextareaProps)}
                key={c.id}
              />
            case ComponentTypeEnum.paragraph:
              return <QuestionnaireParagraph
                {...(c.props as QuestionnaireParagraphProps)}
                key={c.id}
              />
            default:
              return null
          }
        })
      }
    </div>
  )
}

export default QuestionnaireCanvas