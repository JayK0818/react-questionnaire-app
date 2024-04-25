import React, { useState } from 'react'
import { Input, Form, Typography, Button } from 'antd'
import styles from './register.module.scss'
import { UserAddOutlined } from '@ant-design/icons'
import type { ChangeEvent } from 'react'

const Register: React.FC = () => {
  const [userInfo, setUserInfo] = useState<{ username: string, password: string }>({
    username: '',
    password: ''
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
  return (
    <div className={styles.container}>
      <div className={styles.register_container}>
        <Typography.Title
          level={4}
          className={styles.title}
        >新用户注册</Typography.Title>
        <Form layout={'vertical'}>
          <Form.Item
            label='用户名'
            name='username'
            rules={[ {required: true, message: 'Username is required'} ]}
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
            />
          </Form.Item>
          <Button
            block={true}
            type='primary'
            htmlType='submit'
            className={styles.button}
          >注册</Button>
        </Form>
      </div>
    </div>
  )
}

export default Register