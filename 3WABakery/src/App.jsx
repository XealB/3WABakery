import { Routes, Route } from 'react-router'
import Home from './components/Home'
import './App.css'
import NavBar from './components/NavBar'
import GamePage from './page/Game/index.page'
import LogPage from './page/Login/index.page'


const App = () => {



  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/login' element={<LogPage />} />
      </Routes>
    </>
  )
}

export default App
