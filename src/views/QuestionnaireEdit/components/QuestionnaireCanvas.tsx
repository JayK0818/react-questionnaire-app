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
/* import type {
  QuestionnaireTitleProps, QuestionnaireInputProps,
  QuestionnaireTextareaProps, QuestionnaireParagraphProps
} from '../interface/index' */

const QuestionnaireCanvas: React.FC = () => {
  const componentList = useAppSelector(selectComponentList)
  return (
    <div>
      {
        componentList.map((c) => {
          switch (c.type) {
            case ComponentTypeEnum.input:
              return <QuestionnaireInput {...c.props} key={ c.id }/>
            case ComponentTypeEnum.title:
              return <QuestionnaireTitle {...c.props} key={ c.id }/>
            case ComponentTypeEnum.textarea:
              return <QuestionnaireTextArea {...c.props} key={c.id}/>
            case ComponentTypeEnum.paragraph:
              return <QuestionnaireParagraph {...c.props} key={c.id}/>
            case ComponentTypeEnum.checkbox:
              return <QuestionnaireCheckbox key={c.id} {...c.props}/>
            case ComponentTypeEnum.radio:
              return <QuestionnaireRadio key={c.id} {...c.props}/>
            case ComponentTypeEnum.description:
              return <QuestionnaireDescription key={c.id} {...c.props} />
            default:
              return null
          }
        })
      }
    </div>
  )
}

export default QuestionnaireCanvas