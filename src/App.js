import './App.css';
import {ComponentA} from './Components/ComponentA';
import {ComponentB} from './Components/ComponentB';
import {ComponentC} from './Components/ComponentC';
import { useReducer } from 'react';
import { createContext } from 'react';

export const CountContext = createContext()
const initialState = 0
const reducer = (state,action) =>{
  switch(action.type){
    case 'increment' : return state + 1;
    case 'decrement' : return state - 1;
    case 'increment5': return state + action.payload;
    case 'decrement5': return state - action.payload;
    case 'reset' : return initialState;
    default : return state;
  }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={[count,dispatch]}>
    <div className="App">
      <h3>Global Count - {count}</h3>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountContext.Provider>
  );
}

export default App;
