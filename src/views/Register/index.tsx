import React, { useState } from 'react'
import { Input, Form, Typography, Button } from 'antd'
import styles from './register.module.scss'
import { useNavigate } from 'react-router-dom'
import { UserAddOutlined, LockOutlined } from '@ant-design/icons'
import type { ChangeEvent } from 'react'
import { PathEnum } from '@/interface/enum'
import type { RememberUserInfoProps } from '@/interface/user-interface'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState<RememberUserInfoProps & { confirmPassword: string }>({
    username: '',
    password: '',
    confirmPassword: ''
  })
  /**
   * @description 设置用户名与密码
  */
  const handleUserInfoChanged = (e: ChangeEvent<HTMLInputElement>, field: keyof typeof userInfo) => {
    setUserInfo({
      ...userInfo,
      [field]: e.target.value.trim()
    })
  }
  const handleLogin = (): void => {
    navigate(PathEnum.login)
  }
  return (
    <div className={styles.container}>
      <div className={styles.register_container}>
        <Typography.Title
          level={4}
          className={styles.title}
        >新用户注册</Typography.Title>
        <Form
          className={styles.form}
          labelCol={{span: 6}}
        >
          <Form.Item
            label='用户名'
            name='username'
            rules={[
              { required: true, message: 'Username is required' },
              { pattern: /^\w+$/, message: '用户名不合法' }
            ]}
          >
            <Input
              placeholder={'请输入用户名'}
              prefix={<UserAddOutlined />}
              value={userInfo.username}
              allowClear={true}
              onChange={ (e) => handleUserInfoChanged(e, 'username') }
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name='password'
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input.Password
              placeholder={'请输入密码'}
              value={userInfo.password}
              prefix={<LockOutlined/>}
            />
          </Form.Item>
          <Form.Item
            label='确认密码'
            name='confirmPassword'
            rules={[{ required: true, message: '请再次确认密码'}]}
          >
            <Input.Password
              placeholder={'请再次输入密码'}
              value={userInfo.password}
              prefix={<LockOutlined/>}
            />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 6}}>
            <Button
              type='primary'
              htmlType='submit'
              block
              className={styles.button}
              >注册</Button>
          </Form.Item>
          <Form.Item style={{textAlign: 'right'}}>
            <Button
              type={'link'}
              size={'small'}
              onClick={ handleLogin }
            >已有账号,直接登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register