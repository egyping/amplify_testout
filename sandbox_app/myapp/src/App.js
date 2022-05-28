import logo from './logo.svg';
import './App.css';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';


function App() {
  async function showTodos(){
    const models = await DataStore.query(Todo)
    console.log(models)
  }
  async function addTodo(){
    await DataStore.save(
      new Todo({
        name: "New Todo to Test",
        description: "Description of the test ToDo"
      })
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
