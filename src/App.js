import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Plans from './components/Plans/Plans'
import Coaches from './components/Coaches/Coaches'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Header className='left-h' />
        <Routes>
          <Route index element={<Hero />} />
          <Route path='programs' element={<Programs />} />
          <Route path='reasons' element={<Reasons />} />
          <Route path='plans' element={<Plans />} />
          <Route path='coaches' element={<Coaches />} />
        </Routes>
        <Join />
        <Footer />
      </main>
      {/* <div className='App'>
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Coaches />
        <Join />
        <Footer />
  </div> */}
    </BrowserRouter>
  )
}

export default App
