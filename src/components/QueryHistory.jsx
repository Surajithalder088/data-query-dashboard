import React from 'react'
import { useSelector } from 'react-redux'

const QueryHistory = () => {
    const {queryHistory}=useSelector((state)=>state.query)

  return (
    <div className='p-4 bg-white rounded-lg shadow-md mt-4'>
        <h2 className='font-bold text-lg'>Query History</h2>
        <ul className='list-disc pl-4'>
            {
                queryHistory.map((query,index)=>(<li key={index} className='text-gray-700'
                >{query}</li>))
            }
        </ul>

    </div>
  )
}

export default QueryHistory