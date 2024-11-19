//should have a better understanding of map and filter method in js
import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts';
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]) //see down notes , prev is the previous state(array elements) of todos so new todos state = [newTodo, ...prev]
  }

  const updateTodo = (id, todo) => { //todo is obj which is updated and than passed to this function
    setTodos((prev) => prev.map((each) => {  //each is each ele(obj) of prev array  /   direct return of new array is happening
      if (each.id === id) {
        return todo   //updated todo obj return krdo 
      } else return each  //ni to purana hi rahna do
    }))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((each) => each.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((each) => {
      if (each.id === id) return { ...each, completed: !each.completed };
      else return each
    }))
  }


  //LOCAL STORAGE 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) //localstorage string format ma return krta ha value ko to json format ma convert krna padega

    if (todos && todos.length > 0) {  //checking if todos array is not null and has some elements
      setTodos(todos);
    }
  }, [])   // an empty dependency array ([]) in the useEffect hook ensures that the function is called only once—when the component is mounted (i.e., when the page loads)


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) //localstorage  ma "todos" key ma todos(as a value) ko string format ma store krdo 
  }, [todos])  //this useEffect will run whenever todos array changes (i.e on the ui jasa hi hum task add kraga than wo to todos array ma pahla store hoga hence depedency change hua than useEffect ka throug localstorage ma set hojyga)


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {/*Loop and display todo item one by one by accesing from todos array */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App


/*Note: 
...todo: Spreads the properties(key:value pair) of the todo object (passed as an argument) into the new object. For example, if todo = { text: 'Buy milk', completed: false }, the result will be:
{ id: 1697108735000, text: 'Buy milk', completed: false }

Map = creates a new array by calling a specific function on each element present in a original array
filter method = this method creates a new array filled with elements that pass a test provided by a function


*/