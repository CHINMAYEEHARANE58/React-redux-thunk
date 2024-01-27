import React, { useState } from 'react'
import {thunk} from "redux-thunk"
import axios from "axios";
import {createStore, applyMiddleware} from 'redux'
import reducer from './Reducer'
import { fetchUserData, showError } from './Action'

const store = createStore(reducer, applyMiddleware(thunk))

const fetchData = () => async() =>{
    try{
        let data = await axios.get("https://jsonplaceholder.typicode.com/users")
        store.dispatch(fetchUserData(data.data))
    }
    catch(error){
        store.dispatch(showError(error))
    }
}

const DisplayData = () => {
    const [showdata, setShowData] = React.useState(false)
    const [data, setData] = React.useState([])

    function handleClick(){
        store.dispatch(fetchData())
        setShowData(!showdata)
    }

    React.useEffect(()=>{
        let subscribe = store.subscribe(() => setData(store.getState().user))
        return subscribe
    })

    console.log(data)

  return (
    <div>
      <button onClick={handleClick}>{showdata? "Hide Data": "Fetch Data"}</button>
      {showdata && ( <div>{data.map((el,i)=>(
        <div key={i} style={{border:"1px solid black", padding:"10px"}}>
            <h3>{el.name}</h3>
            <h3>{el.email}</h3>
        </div>
      ))}</div> )}
    </div>
  )
}

export default DisplayData
