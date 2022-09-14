import { useState } from 'react'
import { TodoItemType } from '../App'
import { InputStyle } from './Input.styled'

type Props = {
    setTodoItem: (item:TodoItemType) => void 
}

export const Input:React.FC<Props> = ({ setTodoItem }) => {
    const [item, setItem] = useState('' as string)

    const addTodoItem = () => {
        setTodoItem({id:Math.floor(Math.random() * 10000), todo:item})
        setItem('')
    }

  return (
    <InputStyle>
        <input type='text' placeholder='Enter a Todo' value={item} 
            onChange={(e)=>setItem(e.target.value)}/>
        <div onClick={addTodoItem}>GO</div>
    </InputStyle>
  )
}
