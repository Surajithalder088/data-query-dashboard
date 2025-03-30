import React from 'react'
import { useSelector } from 'react-redux'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const ResultsDisplay = () => {
    const {resultData,queryStatus}=useSelector((state)=>state.query)
    if(queryStatus==="loading"){
        return <p className='text-center'>Loading..</p>
    }if(queryStatus==="error"){
        return <p className='text-center text-red-500'>Error, processing query</p>
    }if(resultData===null){
        return <p className='text-center bg-gray-500'>No results to display</p>
    }

const data=[
    {name:"Jan",value:resultData.value},
    {name:"Feb",value:resultData.value+5},
    {name:"Mar",value:resultData.value-3},
    {name:"Apr",value:resultData.value+6},
    {name:"May",value:resultData.value+4},
    {name:"Jun",value:resultData.value-5},
]

  return (
    <div className='p-4 bg-white rounded-lg shadow-md mt-4 '>
        <h2 className='font-bold text-lg'>Query Results</h2>
        <LineChart width={400} height={300} data={data}>
            <CartesianGrid stroke='#ccc'/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="value" stroke='#8884d8'/>
        </LineChart>

    </div>
  )
}

export default ResultsDisplay