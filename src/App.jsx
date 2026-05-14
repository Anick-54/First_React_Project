import './App.css'
import { Banner } from './Components/Banner'
import { Card2 } from './Components/Card2'
import { Helping } from './Components/Helping'
import { HowTo } from './Components/HowTo'
import { NavBar } from './Components/NavBar'
import { Tim } from './Components/Tim'
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
      <Helping/>
      <HowTo/>
      <Tim/>
      <Card2/>
    </>
  )
}

export default App
