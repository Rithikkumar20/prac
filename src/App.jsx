import { Route, Router, Routes } from '@solidjs/router'
import Home from './home/Home'
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'
function App() {

  return (
    <Router>
      <Routes>
        <Route path={'/'} component={Home}/>
        <Route path={'/Destination'} component={Destination} /> 
        <Route path={'/Crew'} component={Crew} />
        <Route path={'/Technology'} component={Technology} />
      </Routes>
    </Router>
  )
}

export default App
