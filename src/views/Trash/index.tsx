import React from 'react'
import SearchInput from '@/components/SearchInput'
import { Typography } from 'antd'

const Trash: React.FC = () => {
  return (
    <div>
      <header className={'questionnaire-header'}>
        <Typography.Title
          className={'title'}
          level={5}
        >回收站</Typography.Title>
        <SearchInput/>
      </header>
    </div>
  )
}

export default Trash