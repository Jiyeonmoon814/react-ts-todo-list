import React from 'react'
import { TodoItemStyle } from './TodoItem.styled'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'

export const TodoItem = () => {
  return (
    <TodoItemStyle>
      <div>
        TodoItem
      </div>
      <div>
        <EditIcon />
        <DeleteIcon />
        <CheckIcon />
      </div>    
    </TodoItemStyle>
  )
}
