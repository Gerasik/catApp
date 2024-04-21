import InterfacePanel from "components/InterfacePanel"
import "./App.css"
import { navigationInterface } from "./constants"
import { NavigationInterface } from "types/navigation"
import { useState } from "react"
import Boosters from "components/Boosters"

function App() {
  const [activeInterface, setActiveInterface] = useState(
    NavigationInterface.TAP
  )
  return (
    <div className="bg-hero-pattern w-screen h-screen bg-cover bg-center px-6 py-14 flex flex-col max-w-md mx-auto gap-2 s">
      {activeInterface === NavigationInterface.BOOST && <Boosters />}
      {activeInterface !== NavigationInterface.BOOST && <p>Contetn</p>}
      <InterfacePanel
        navigationInterface={navigationInterface}
        activeInterface={activeInterface}
        setActiveInterface={setActiveInterface}
      />
      {/* <img src={IMGCat} /> */}
      {/* <SmartphoneWindow currentUsername={currentUsername} /> */}
    </div>
  )
}

export default App
