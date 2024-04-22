import InterfacePanel from "components/InterfacePanel"
import "./App.css"
import { navigationInterface } from "./constants"
import { NavigationInterface } from "types/navigation"
import { useState } from "react"
import Boosters from "components/Boosters"
import CatContainer from "components/CatContainer"
import GameStats from "components/GameStats"
import { store } from "./store"
import { Provider } from "react-redux"
import Tasks from "components/Tasks"

function App() {
  const [activeInterface, setActiveInterface] = useState(
    NavigationInterface.TAP
  )
  return (
    <Provider store={store}>
      <div className="bg-[url('../src/assets/images/catappback1.png')] w-screen h-screen bg-cover bg-center px-6 py-14 flex flex-col max-w-md mx-auto gap-2 overflow-hidden">
        {activeInterface === NavigationInterface.BOOST && <Boosters />}
        {activeInterface === NavigationInterface.TAP && <CatContainer />}
        {activeInterface === NavigationInterface.STATS && <GameStats />}
        {activeInterface === NavigationInterface.TASK && <Tasks />}
        <InterfacePanel
          navigationInterface={navigationInterface}
          activeInterface={activeInterface}
          setActiveInterface={setActiveInterface}
        />
      </div>
    </Provider>
  )
}

export default App
