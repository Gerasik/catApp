import React from "react"
import IMGBalance from "assets/images/balanceAlt.png"
import { formatNumber } from "helpers/number"

interface Props {
  balance: number
}

const BalanceDisplay: React.FC<Props> = ({ balance }) => {
  return (
    <div className="flex text-white gap-1.5 items-center justify-center text">
      <img src={IMGBalance} className="h-8" /> {formatNumber(balance)}
    </div>
  )
}

export default BalanceDisplay
