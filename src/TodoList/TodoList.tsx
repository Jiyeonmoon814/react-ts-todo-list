import React from 'react'
import { Wrapper } from './TodoList.styled'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = () => {
  return (
    <Wrapper>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </Wrapper>
  )
}
