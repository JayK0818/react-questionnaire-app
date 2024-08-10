import React from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectComponentById, updateProps } from '@/store/component'
import { Form, Input, Checkbox, Space, Button } from 'antd'
import type { QuestionnaireCheckboxProps } from '../interface/index'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import styles from '../index.module.scss'
import { nanoid } from '@reduxjs/toolkit'

const CheckboxForm: React.FC<{ fe_id: string }> = ({ fe_id }) => {
  const dispatch = useAppDispatch()
  const { title, options = [], isVertical } = useAppSelector(state => selectComponentById(state, fe_id)) as Required<QuestionnaireCheckboxProps> 
  const [form] = Form.useForm()
  const handleFormChanged = (): void => {
    dispatch(updateProps({
      fe_id,
      props: form.getFieldsValue()
    }))
  }
  /**
   * @description 删除选项
  */
  const handleDeleteOption = (item: { label: string, value: string, checked: boolean }): void => {
    const list = options.map(option => ({ ...option }))
    const idx = list.findIndex(option => option.value === item.value)
    if (idx >= 0) {
      list.splice(idx, 1)
      dispatch(updateProps({
        fe_id,
        props: {
          options: list
        }
      }))
      form.setFieldValue('options', list)
    }
  }
  /**
   * @description 新增选项
  */
  const handleAddOption = (): void => {
    const list = [...options]
    list.push({
      label: '新增选项',
      value: nanoid(),
      checked: false
    })
    dispatch(updateProps({
      fe_id,
      props: {
        options: list
      }
    }))
    form.setFieldValue('options', list)
  }
  return (
    <Form
      form={form}
      layout={'vertical'}
      initialValues={{
        title,
        options,
        isVertical
      }}
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
                <Form.Item>
                  {options.length > 1 && (
                    <span
                      className={styles['minus-icon']}
                      onClick={ () => handleDeleteOption(option) }
                    >
                      <MinusCircleOutlined/>
                    </span>
                  ) }
                </Form.Item>
              </Space>
            ))
          }
        </Form.List>
      </Form.Item>
      <Form.Item>
        <Button
          type={ 'link' }
          icon={<PlusOutlined />}
          onClick={ handleAddOption }
        >新增选项</Button>
      </Form.Item>
      <Form.Item
        label={''}
        name={'isVertical'}
        valuePropName={'checked'}
      >
        <Checkbox>是否水平布局</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default CheckboxForm