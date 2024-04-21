import React, { useState } from "react"
import styles from "./SmartphoneWindow.module.css"
import BalanceDisplay from "./components/BalanceDisplay"
import CatContainer from "./components/CatContainer"
import InterfacePanel from "./components/InterfacePanel"
import GameStats from "./components/GameStats"
import Boosters from "./components/Boosters"

interface SmartphoneWindowProps {
  currentUsername: string
}

const SmartphoneWindow: React.FC<SmartphoneWindowProps> = ({
  currentUsername,
}) => {
  const [showGameStats, setShowGameStats] = useState(false)
  const [showBoosters, setShowBoosters] = useState(true)
  const balance = 1000000

  const toggleGameStats = () => {
    setShowGameStats((prev) => !prev)
    setShowBoosters(false)
  }
  const toggleBoosters = () => {
    setShowBoosters((prev) => !prev)
    setShowGameStats(false)
  }

  return (
    <div className={styles.smartphoneWindow}>
      {!showGameStats && !showBoosters && <BalanceDisplay balance={balance} />}
      {!showGameStats && !showBoosters && (
        <div className={styles.catContainer}>
          <CatContainer />
        </div>
      )}
      <div className={styles.interfacePanel}>
        <InterfacePanel />
      </div>
      <button onClick={toggleGameStats}>Toggle Game Stats</button>
      <button onClick={toggleBoosters}>Toggle Boosters</button>{" "}
      {/* Кнопка для бустеров */}
      {showGameStats && <GameStats />}
      {showBoosters && <Boosters />}
    </div>
  )
}

export default SmartphoneWindow
