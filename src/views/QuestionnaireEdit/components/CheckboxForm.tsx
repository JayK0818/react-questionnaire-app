import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectComponentById } from '@/store/component'
import { Form, Input, Checkbox } from 'antd'
import type { QuestionnaireCheckboxProps } from '../interface/index'

const CheckboxForm: React.FC<{ fe_id: string }> = ({ fe_id }) => {
  const componentProps = useAppSelector(state => selectComponentById(state, fe_id)) as Required<QuestionnaireCheckboxProps> 
  return (
    <Form>
      <Form.Item>
        <Input value={ componentProps.title } />
      </Form.Item>
      <Form.Item>
        {
          componentProps.options.map(item => (
            <Checkbox checked={item.checked} key={item.value}>{ item.label }</Checkbox>
          ))
        }
      </Form.Item>
    </Form>
  )
}

export default CheckboxForm