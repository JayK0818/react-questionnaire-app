import React from 'react'
import { selectComponentList } from '@/store/component'
import { useAppSelector } from '@/store/hooks'
import QuestionnaireInput from './QuestionnaireInput'
import QuestionnaireTitle from './QuestionnaireTtile'
import { ComponentTypeEnum } from "@/interface/enum";

const QuestionnaireCanvas: React.FC = () => {
  const componentList = useAppSelector(selectComponentList)
  return (
    <React.Fragment>
      {
        componentList.map(c => {
          switch (c.type) {
            case ComponentTypeEnum.input:
              return <QuestionnaireInput {...c.props} />
            case ComponentTypeEnum.title:
              return <QuestionnaireTitle {...c.props}/>
            default:
              return null
          }
        })
      }
    </React.Fragment>
  )
}

export default QuestionnaireCanvas