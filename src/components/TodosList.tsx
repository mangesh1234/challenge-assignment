import * as React from 'react'
import {Name} from '../models/NameEvent'

interface Props {
  todos: Name[],
  onTodoClicked: (todoId: number) => void
}
interface State { }

export default class AddTodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { todos, onTodoClicked } = this.props
    return (
      <ul>
        {
          todos.map(todo => (
            <li>jj</li>
            // <li key={todo.id}
            //   onClick={() => onTodoClicked(todo.id)}
            //   style={{ textDecoration: `${todo ? 'line-through' : ''}`, cursor: 'pointer' }}>
            //   {todo.id}
            // </li>)
          ))
        }
      </ul>
    )
  }
}