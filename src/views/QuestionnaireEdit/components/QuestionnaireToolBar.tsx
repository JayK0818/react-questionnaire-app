import React from 'react'
import styles from '../index.module.scss'
import { Button, message, Space, Tooltip } from 'antd'
import {
  LeftOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined,
  CopyOutlined, BlockOutlined, UpOutlined, DownOutlined, UndoOutlined
} from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {
  selectActiveComponent, selectActiveComponentId, selectActiveComponentIdx, selectComponentList,
  swap, deleteActiveComponent, toggleLocked, toggleVisible, copy, paste
} from '@/store/component'
import { MoveComponentEnum } from '../interface/index'
import { nanoid } from 'nanoid'

const QuestionnaireToolBar: React.FC = () => {
  const activeComponent = useAppSelector(selectActiveComponent)
  const selectedId = useAppSelector(selectActiveComponentId)
  const selectedIdx = useAppSelector(selectActiveComponentIdx)
  const componentList = useAppSelector(selectComponentList)
  const hasCopied = useAppSelector(state => state.component.copiedComponent)
  const isDisabled = selectedId === ''
  // dispatch
  const dispatch = useAppDispatch()

  // 上下移动
  const handleSwap = (type: MoveComponentEnum): void => {
    if (selectedIdx < 0) {
      return
    }
    dispatch(swap({
      type,
      index: selectedIdx
    }))
  }
  /**
   * @description 删除高亮组件
  */
  const handleDelete = (): void => {
    dispatch(deleteActiveComponent())
  }
  /**
   * @description 设置组件锁定
  */
  const handleSetComponentLocked = (): void => {
    dispatch(toggleLocked(selectedId))
  }
  /**
   * @description 设置组件隐藏
  */
  const handleToggleVisible = (): void => {
    dispatch(toggleVisible())
  }
  /**
   * @description 组件复制
  */
  const handleCopy = (): void => {
    dispatch(copy(selectedId))
    message.success('copy success')
  }
  /**
   * @description 组件黏贴
  */
  const handlePaste = (): void => {
    dispatch(paste(nanoid()))
  }
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
              disabled={isDisabled || componentList.length <= 1 }
              onClick={handleDelete}
            ></Button>
          </Tooltip>
          <Tooltip title='隐藏'>
            <Button
              shape={'circle'}
              icon={<EyeInvisibleOutlined />}
              disabled={isDisabled || componentList.length <= 1}
              onClick={ handleToggleVisible }
            ></Button>
          </Tooltip>
          <Tooltip title='锁定'>
            <Button
              shape={'circle'}
              icon={<LockOutlined />}
              disabled={ isDisabled }
              type={activeComponent && activeComponent.isLocked ? 'primary' : 'default'}
              onClick={ handleSetComponentLocked }
            ></Button>
          </Tooltip>
          <Tooltip title='复制'>
            <Button
              shape={'circle'}
              icon={<CopyOutlined />}
              disabled={isDisabled}
              onClick={ handleCopy }
            ></Button>
          </Tooltip>
          <Tooltip title='黏贴'>
            <Button
              shape={'circle'}
              icon={<BlockOutlined />}
              disabled={isDisabled || (!hasCopied)}
              onClick={ handlePaste }
            ></Button>
          </Tooltip>
          <Tooltip title='上移'>
            <Button
              shape={'circle'}
              icon={<UpOutlined />}
              disabled={isDisabled || selectedIdx <= 0}
              onClick={ () => handleSwap(MoveComponentEnum.up) }
            ></Button>
          </Tooltip>
          <Tooltip title='下移'>
            <Button
              shape={'circle'}
              icon={<DownOutlined />}
              disabled={ isDisabled || (componentList.length - 1 <= selectedIdx) }
              onClick={ () => handleSwap(MoveComponentEnum.down) }
            ></Button>
          </Tooltip>
          <Tooltip title='撤销'>
            <Button
              shape={'circle'}
              icon={ <UndoOutlined/> }
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