import { Route, Router, Routes } from '@solidjs/router'
import Home from './home/Home'
import Destination from './Destination'

function App() {

  return (
    <Router>
      <Routes>
        <Route path={'/'} component={Home}/>
        <Route path={'/Destination'} component={Destination} />
      </Routes>
    </Router>
  )
}

export default App
