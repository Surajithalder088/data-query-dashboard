
import { Provider } from 'react-redux'
import QueryInput from './components/QueryInput'
import QueryHistory from './components/QueryHistory'
import ResultsDisplay from './components/ResultsDisplay'
import {store} from './store/store'

function App() {
 

  return (
    <>
    <Provider store={store}>
    <div className='container mx-aquto p-6'>
      <h1 className='text-2xl font-bold text-center mb-4'>AI-powered Data Query Dashboard</h1>
      <div className='max-w-xl mx-auto'>
        <QueryInput/>
        <QueryHistory/>
        <ResultsDisplay/>
      </div>
    </div>


    </Provider>
      
    </>
  )
}

export default App
