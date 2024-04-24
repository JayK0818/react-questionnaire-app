import React, { useState, memo, useEffect } from 'react'
import { Input } from 'antd'
import type { ChangeEvent } from 'react'
import styles from './search-input.module.scss'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { SEARCH_KEYWORD } from '@/constants'

const SearchInput = memo(function () {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [text, setText] = useState<string>('')
  const [searchParams] = useSearchParams()
  const handleTextChanged = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value)
  }
  const handleSearch = (): void => {
    navigate(`${pathname}?${SEARCH_KEYWORD}=${text}`)
  }
  useEffect(() => {
    const value = searchParams.get(SEARCH_KEYWORD) ?? ''
    setText(value)
  }, [searchParams])
  return (
    <div>
      <Input.Search
        value={text}
        onChange={handleTextChanged}
        placeholder={'请输入关键字'}
        className={styles.input}
        allowClear
        onSearch={handleSearch}
      />
    </div>
  )
})

export default SearchInput