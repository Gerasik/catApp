import React from "react"
import styles from "./BalanceDisplay.module.css"
import IMGBalance from "assets/images/balance.png"

interface BalanceDisplayProps {
  balance: number
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  return (
    <div className={styles.balanceDisplay}>
      <img src={IMGBalance} alt="Balance" />
      <span>{balance}</span>
    </div>
  )
}

export default BalanceDisplay
