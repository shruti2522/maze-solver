import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing'
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home'


function App() {

  return (
    <>
    <div style={{height:"100vh",
  width:"100vw"}}>

      <Router>
        <Routes>
        <Route path={"/"} element={<Home />} />
        
        </Routes>
      </Router>

    </div>
     
    </>
  )
}

export default App
