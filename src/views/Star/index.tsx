import React from 'react'
import SearchInput from '@/components/SearchInput'
import { Typography } from "antd"
const { Title } = Typography

const Star: React.FC = () => {
  return (
    <div>
      <header
        className={'questionnaire-header'}
      >
        <Title
          className={'title'}
          level={5}
        >收藏问卷</Title>
        <SearchInput/>
      </header>
    </div>
  )
}

export default Star