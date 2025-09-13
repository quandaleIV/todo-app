export function Header(props) {
  const { todos } = props
  const todosLength = todos.length

  const isTasksPLural = todos.length != 1

  const taskOrTasks = isTasksPLural ? 'tasks' : 'task'

  return (
    <header>
    <h1 className="text-gradient">You have {todosLength} {taskOrTasks} to complete.</h1>
    </header>
  )
}