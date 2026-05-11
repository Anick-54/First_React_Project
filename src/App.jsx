import './App.css'
import { Banner } from './Components/Banner'
import { NavBar } from './Components/NavBar'
import { UnSec } from './Components/UnSec'
import { OurSer } from './Services/OurSer'
import { SerCard } from './Services/SerCard'

function App() {
  

  return (
    <>
      <NavBar/>
      <Banner/>
      <OurSer/>
      <SerCard/>
      <UnSec/>
    </>
  )
}

export default App
