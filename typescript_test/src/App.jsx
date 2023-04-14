import { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>

        {/* Shows form depending on count */}
        {count === 0 && 
          <RegisterForm setCount={setCount}/>

        }

        {count === 1 && 
          <LoginForm setCount={setCount}/>
        }

      </div>

    </>

  )

}

export default App
