import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queryError, querySuccess, submitQuery } from '../store/querySlice'

const QueryInput = () => {
    const [query,setQuery]=useState("")
    const dispatch=useDispatch()
    const {resultData}=useSelector((state)=>state.query)

    const handleSubmit=()=>{
        dispatch(submitQuery(query))
        setTimeout(()=>{
            if(query.trim()){
                let number=Math.random()*100
                dispatch(querySuccess({value:number}))
                console.log(number);
                console.log(resultData);
                
                
            }else{
                dispatch(queryError())
            }
        },2000)
    }
  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-md'>
        <input type='text' className=' border p-2 w-full rounded-md'
        placeholder='Ask a bussiness question...'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
        <button
        className=' bg-slate-200 text-black p-2 rounded-md mt-2'
        onClick={handleSubmit}
        >
            Submit
        </button>

    </div>
  )
}

export default QueryInput