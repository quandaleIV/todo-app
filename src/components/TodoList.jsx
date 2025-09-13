import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props

  
  const filteredTodoslist = selectedTab === 'All' ? todos :
  selectedTab === 'Completed' ? todos.filter(x => x.complete) :
  todos.filter(x => !x.complete)
  
  return (
    <>
      {filteredTodoslist.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex(val => val.input == todo.input)}
            {...props}
            todo={todo}/>
        )
      })}
    </>
  )
}