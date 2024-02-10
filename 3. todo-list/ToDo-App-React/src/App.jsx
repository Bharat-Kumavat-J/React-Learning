import Heading from './components/heading'
import Inputtodos from './components/input'
import Todos from './components/todos'
import './App.css'
import React from 'react'



function App() {

  const todoList = []

  const todoData = ['attend meeting', 'create sheet', 'write code']

  for(let i = 0; i < 3; i++){
    todoList.push(<Todos data={todoData[i]}></Todos>)
  }

  return (
    <div>
     <Heading></Heading>
    <Inputtodos></Inputtodos>
     {todoList.map((item, index) => <React.Fragment key={index}>  {item}</React.Fragment>)}
    </div>
  )
}

export default App
