import React from 'react';
import './styles/home.css';
import {useDispatch,useSelector} from 'react-redux';
import Header from './Header';
const Home = () => {
   const dispatch=useDispatch();
    const inc=()=>{
        dispatch({
            type:"increment"
        })
    }
    const dec=()=>{
        dispatch({
            type:"decrement"
        })
    }
    const inc5=()=>{
        dispatch({
            type:"incrementByValue",
            payload:5
        })
    }
    // const dec5=()=>{
    //     dispatch({
    //         type:"decrementByValue",
    //         payload:5
    //     })
    // }
    const {c:count}=useSelector(state=>state.red);
  return (
    <>
    <h1 className='header'>Counter Function</h1>
    
    <Header/>
    <div className='home'>
        <h1>{count}</h1>
        <div>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={inc5}>Increment by 5</button>
      <button onClick={()=>dispatch({type:"decrementByValue",payload:5})}>Decrement by 5</button>
      </div>
    </div>
    </>
  )
}

export default Home
