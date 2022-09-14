import React, { useEffect, useState } from 'react'
import { Wrapper } from './App.styled'
import { Input } from './Input/Input'
import { TodoList } from './TodoList/TodoList'

export type TodoItemType = {
  id:number 
  todo: string 
}

export const App:React.FC = () => {
  const [todoItem, setTodoItem] = useState({} as TodoItemType)
  const [todoList, setTodoList] = useState([] as TodoItemType[])

  useEffect(() => {
    addTodoItem()
  },[todoItem])
  
  const addTodoItem = () => {
    setTodoList([...todoList, todoItem])
  }


  return (
    <Wrapper>
      <h2>To-do List</h2>
      <Input setTodoItem={setTodoItem} />
      <TodoList />
    </Wrapper>
  )
}
