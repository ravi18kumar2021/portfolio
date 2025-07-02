import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import SectionHeader from './components/SectionHeader'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <SectionHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
