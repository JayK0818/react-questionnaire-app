import React, { useState, useEffect } from 'react'
import styles from './login.module.scss'
import { Button, Form, Input, Typography, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { PathEnum } from '@/interface/enum'
import { saveUserInfo, removeUserInfo, getUserInfo } from '@/utils/index'
import type { RememberUserInfoProps } from '@/interface/user-interface'

const Login: React.FC = () => {
  const [form] = Form.useForm()
  const [userInfo, setUserInfo] = useState<RememberUserInfoProps>({
    username: '',
    password: ''
  })
  const [isRemember, setIsRemember] = useState(false)
  /**
   * @description 更新用户输入的信息
  */
  const handleUserInfoChanged = (e: ChangeEvent<HTMLInputElement>, field: keyof typeof userInfo): void => {
    setUserInfo({
      ...userInfo,
      [field]: e.target.value.trim()
    })
  }
  /**
   * @description 是否记住我
  */
  const handleToggleRemember = (): void => {
    setIsRemember(!isRemember)
  }
  /**
   * @description 校验成功之后登录
  */
  const handleLogin = (): void => {
    if (isRemember) {
      saveUserInfo(userInfo)
    } else {
      removeUserInfo()
    }
  }
  useEffect(() => {
    const localUserInfo = getUserInfo()
    if (localUserInfo) {
      form.setFieldsValue(localUserInfo)
      setIsRemember(true)
    }
  }, [form])
  const navigate = useNavigate()
  const handleRegister = (): void => {
    navigate(PathEnum.register)
  }
  return (
    <div className={styles.container}>
      <div>
        <Typography.Title
          level={4}
          className={styles.title}
        >用户登录</Typography.Title>
        <Form
          layout={'vertical'}
          className={styles.form}
          onFinish={handleLogin}
          form={form}
        >
          <Form.Item
            label='用户名'
            name='username'
            rules={[
              { required: true, message: '用户名不得为空' },
              { pattern: /^\w+$/, message: '用户名不合法' }
            ]}
          >
            <Input
              placeholder='用户名'
              prefix={<UserOutlined />}
              value={userInfo.username}
              onChange={ (e) => handleUserInfoChanged(e, 'username') }
            />
          </Form.Item>
          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: '密码不得为空' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              value={userInfo.password}
              placeholder={'密码'}
              onChange={ (e) => handleUserInfoChanged(e, 'password') }
            />
          </Form.Item>
          <Form.Item>
            <Checkbox checked={isRemember} onChange={ handleToggleRemember }>记住我</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              block={true}
              type={'primary'}
              htmlType={'submit'}
              className={styles.button}
            >登录</Button>
          </Form.Item>
          <Form.Item style={{textAlign: 'right'}}>
            <Button
              type={'link'}
              size={'small'}
              onClick={ handleRegister }
            >暂无账号,去注册</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login