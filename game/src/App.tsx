import "./App.css"
import SmartphoneWindow from "./SmartphoneWindow"

function App() {
  const currentUsername = "testUser"

  return (
    <div className="App">
      <SmartphoneWindow currentUsername={currentUsername} />
    </div>
  )
}

export default App
