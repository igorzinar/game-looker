import React from 'react'

// Components and pages
import Home from './Pages/Home'
import Nav from './components/Nav'

// Router
import { Route } from 'react-router-dom'

// Styles

import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  )
}

export default App
