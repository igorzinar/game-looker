import React, { useEffect } from 'react'
// Components and pages
import Home from './Pages/Home'
import { Route } from 'react-router-dom'
// Styles
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  )
}

export default App
