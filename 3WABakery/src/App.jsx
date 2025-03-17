import { Routes, Route } from 'react-router'
import Home from './components/Home'
import './App.css'

const App = () => {



  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
