import Welcome from './Components/Pages/Welcome'
import Signup from './Components/Pages/Signup'
import Login from './Components/Pages/Login'
import { useState } from 'react'

const App = function () {
  const [actualPage, setActualPages] = useState('welcome')
  const setActualPageMethod = (page) => {
    console.log(page)

    setActualPages(page)
  }

  switch (actualPage) {
    case 'welcome':
      return (
        <Welcome props={{
          setActualPage: setActualPageMethod
        }} />
      )
    case 'login':
      return (
        <Login props={{
          setActualPage: setActualPageMethod
        }} />
      )
    case 'signup':
      return (
        <Signup props={{
          setActualPage: setActualPageMethod
        }} />
      )
  }
}

export default App