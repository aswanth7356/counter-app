import { useState } from 'react';
import './App.css';

function App() {

    const [counter,setCounter]=useState(0)
    function incrementCounter(){
      setCounter(counter+1)
    }

    function decrementCounter(){
      if(counter!==0){
        setCounter(counter-1)
      }
  }

  function resetCounter(){
    setCounter(0)
  }


  return (
    <>
      
      <div className="container w-50 mt-5 bg-light shadow">
        <div class="card border p-3" style={{display:'flex' , alignContent:'center' , justifyContent:'center'}}>
          <div className="card-body">
            <h2 className="card-title">Counter App</h2>
            <h1>{counter}</h1>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <button type="button" onClick={incrementCounter} className="btn btn-success mx-2">Increment</button>
            <button type="button" onClick={decrementCounter} className="btn btn-danger">Decrement</button>
            <button type="button" onClick={resetCounter}  className="btn btn-dark mx-2">Reset</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
