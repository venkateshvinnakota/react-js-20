import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteTodo} = props
  const {title, id} = itemDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="TodoItemContainer">
      <p className="title">{title}</p>
      <div>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
