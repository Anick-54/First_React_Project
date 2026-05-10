import './App.css'
import { Banner } from './Components/Banner'
import { NavBar } from './Components/NavBar'
import { OurSer } from './Services/OurSer'
import { SerCard } from './Services/SerCard'

function App() {
  

  return (
    <>
      <NavBar/>
      <Banner/>
      <OurSer/>
      <SerCard/>
    </>
  )
}

export default App
