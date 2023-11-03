// import Counter from 'rea./components/Counter';
import './App.css'

//Store
interface CounterState {
  value:number;
}
interface UserState{
  isSignedIn:boolean;
}

//Actions
const incrementedByAmount = {type:"INCREMENT", payload:10};
const decrement = {type:"DECREMENT"};

//Reducers


function App() {

  return (
    <>
      <h1>Vite + React + TS + Redux</h1>
      {/* <Counter /> */}
    </>
  )
}

export default App
