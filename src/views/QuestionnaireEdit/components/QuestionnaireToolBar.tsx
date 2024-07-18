import React from 'react'
import styles from '../index.module.scss'
import { Button, Space, Tooltip } from 'antd'
import { LeftOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined, CopyOutlined, BlockOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/store/hooks'
import { selectActiveComponent, selectActiveComponentId } from '@/store/component'

const QuestionnaireToolBar: React.FC = () => {
  const activeComponent = useAppSelector(selectActiveComponent)
  const selectedId = useAppSelector(selectActiveComponentId)
  const isDisabled = selectedId === 0
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
          <Tooltip title='删除'>
            <Button
              shape={'circle'} 
              icon={<DeleteOutlined />}
              disabled={ isDisabled }
            ></Button>
          </Tooltip>
          <Tooltip title='隐藏'>
            <Button
              shape={'circle'}
              icon={<EyeInvisibleOutlined />}
              disabled={ isDisabled }
            ></Button>
          </Tooltip>
          <Tooltip title='锁定'>
            <Button
              shape={'circle'}
              icon={<LockOutlined />}
              disabled={ isDisabled }
              type={ activeComponent && activeComponent.isLocked ? 'primary' : 'default' }
            ></Button>
          </Tooltip>
          <Tooltip title='复制'>
            <Button
              shape={'circle'}
              icon={<CopyOutlined />}
              disabled={isDisabled}
            ></Button>
          </Tooltip>
          <Tooltip title='黏贴'>
            <Button
              shape={'circle'}
              icon={<BlockOutlined />}
              disabled={ isDisabled }
            ></Button>
          </Tooltip>
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