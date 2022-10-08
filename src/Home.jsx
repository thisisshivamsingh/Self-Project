import React, { useContext } from 'react';
import {StateContext, SetStateContext} from "./App";

const Home = () => {
    const stateColor = useContext(StateContext);
    const setStateColor = useContext(SetStateContext);
    const changeColor = ()=>{
        if(stateColor=="orange"){
            setStateColor("black");
        }else{
            setStateColor("orange");
        }
    }
  return (
    <div>
        <button onClick={()=>changeColor()}>CLick Me!</button>
    </div>
  )
}

export default Home;