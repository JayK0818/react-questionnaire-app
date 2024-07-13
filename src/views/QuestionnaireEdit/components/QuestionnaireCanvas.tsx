import React from 'react'
import { selectComponentList } from '@/store/component'
import { useAppSelector } from '@/store/hooks'

const QuestionnaireCanvas: React.FC = () => {
  const componentList = useAppSelector(selectComponentList)
  console.log(componentList)
  return (
    <div>Hello World!</div>
  )
}

export default QuestionnaireCanvas