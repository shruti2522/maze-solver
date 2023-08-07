import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
