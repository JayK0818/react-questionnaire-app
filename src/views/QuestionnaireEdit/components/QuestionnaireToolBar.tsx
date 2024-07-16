import React from 'react'
import styles from '../index.module.scss'
import { Button, Space } from 'antd'
import { LeftOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/store/hooks'
import { selectActiveComponent } from '@/store/component'

const QuestionnaireToolBar: React.FC = () => {
  const activeComponent = useAppSelector(selectActiveComponent)
  return (
    <div className={styles.header}>
      <div>
        <Button
          icon={ <LeftOutlined/> }
          type={'link'}
        >返回</Button>
      </div>
      <div
        className={styles['tool-container']}
      >
        <Space size={'middle'}>
          <Button
            shape={'circle'} 
            icon={<DeleteOutlined/>}
          ></Button>
          <Button
            shape={'circle'}
            icon={ <EyeInvisibleOutlined/> }
          ></Button>
          <Button
            shape={'circle'}
            icon={<LockOutlined />}
            type={ activeComponent && activeComponent.isLocked ? 'primary' : 'default' }
          ></Button>
        </Space>
      </div>
      <div>
        <Space>
          <Button
          >保存</Button>
          <Button
            type={'primary'}
            >发布</Button>
          </Space>
      </div>
    </div>
  )
}

export default QuestionnaireToolBar