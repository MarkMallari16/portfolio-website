import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className='mx-6 lg:mx-40'>
      <NavBar />
      <Hero />
      <About/>
    </div>
  )
}

export default App
