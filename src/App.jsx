import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/Todoinput";
import { TodoList } from "./components/TodoList";



function App() {
  // const todos = [
  //   { input: "Go to the gym", complete: false},
  //   { input: "Go buy groceries", complete: true},
  //   { input: "Go buy shoes", complete: true},
  //   { input: "Go buy stationary", complete: true},
  // ]
  


  const [todos, setTodos] = useState([
    { input: "Hello add your first task!", complete: false}
  ])

  const [selectedTab, setSelectedTab] = useState('All')


  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false } ]
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    })
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

  function handleUpdateTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

  function handleSavedData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
      let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
  }, [])

  return (
    <>
    <Header todos={todos}/>
    <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}
    todos={todos}/>
    <TodoList handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}></TodoList>
    <TodoInput handleAddTodo={handleAddTodo}></TodoInput>
    </>
  )
}

export default App
