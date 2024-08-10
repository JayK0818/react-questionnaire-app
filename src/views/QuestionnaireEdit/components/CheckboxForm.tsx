import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectComponentById, updateProps } from '@/store/component'
import { Form, Input, Checkbox, Space } from 'antd'
import type { QuestionnaireCheckboxProps } from '../interface/index'

const CheckboxForm: React.FC<{ fe_id: string }> = ({ fe_id }) => {
  const dispatch = useAppDispatch()
  const { title, options = [] } = useAppSelector(state => selectComponentById(state, fe_id)) as Required<QuestionnaireCheckboxProps> 
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      title,
      options
    })
  }, [])
  const handleFormChanged = (): void => {
    dispatch(updateProps({
      fe_id,
      props: form.getFieldsValue()
    }))
  }
  return (
    <Form
      form={form}
      layout={'vertical'}
      onFieldsChange={ handleFormChanged }
    >
      <Form.Item
        name={'title'}
        label={'标题'}
        rules={[{ required: true, message: '标题不得为空' }] }
      >
        <Input
          placeholder={ '请输入多选标题' }
        />
      </Form.Item>
      <Form.Item
        label={'选项'}
      >
        <Form.List name={'options'}>
          {
            () => options.map((option, i) => (
              <Space key={option.value}>
                <Form.Item
                  name={[i, 'checked']}
                  valuePropName={'checked'}
                >
                  <Checkbox/>
                </Form.Item>
                <Form.Item
                  name={[i, 'label']}
                  rules={[{ required: true, message: '选项不得为空' }]}
                >
                  <Input placeholder={'请输入选项...'} />
                </Form.Item>
              </Space>
            ))
          }
        </Form.List>
      </Form.Item>
    </Form>
  )
}

export default CheckboxForm