import react from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () =>{
  return(

    <div>
    <Navbar/>
    <Hero/>
    <Contact/>
    <Footer/>
    </div>
  )
}
export default App