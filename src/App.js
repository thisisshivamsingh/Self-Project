import logo from './logo.svg';
import './App.css';
import React, {useState,createContext} from "react";
import Home from './Home';

export const StateContext = createContext();
export const SetStateContext = createContext();

function App() {
  const [state, setState] = useState("orange");
  return (
    <SetStateContext.Provider value={setState}>
      <StateContext.Provider value={state}>
      <Home/>
      <h1 style={{color:state}}>Hello World!</h1>
      </StateContext.Provider>
      </SetStateContext.Provider>
  
  );
}

export default App;
;