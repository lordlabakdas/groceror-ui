import { useState } from 'react'
import Background from './components/Background';
import './App.css';
import axios from 'axios';


function App() {
  const [count, setCount] = useState(0)

  // const getQuote = () => {
  //   axios.get('https://api.quotable.io/random')
  //     .then(response => {

  //       console.log(response.data.content)

  //     }).catch(err => {

  //       console.log(err)

  //     })
  // }



  return (
    <>
      {/* <div className ="App">
        <button onClick={getQuote}>Get Quote</button>
      </div> */}


      <Background count={count} setCount={setCount} />
    </>

  )

}

export default App
