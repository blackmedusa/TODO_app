import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  //listen to database and fetch new todos as they are updated
  useEffect(() => {
    db.collection('Todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
   
  }, [])

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('Todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>TODO LIST</h1>      
      <form>
        <FormControl>
          <InputLabel>📝Write your TODO List</InputLabel>
          <Input value ={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
       
        <Button disabled={!input} type = "submit" onClick={addTodo} variant="contained" color="success">
         ADD TODO
        </Button>
      </form>
      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
         // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
