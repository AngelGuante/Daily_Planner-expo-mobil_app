import Welcome from './Components/Pages/Welcome'
import { useState } from 'react'

const App = function () {
  const [actualPage, setActualPages] = useState('welcome')
  const setActualPageMethod = (page) => {
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
      break
  }
}

export default App