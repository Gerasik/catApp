import React from "react"
import BalanceDisplay from "./BalanceDisplay"
import { splitAndJoinNumberFromEnd } from "helpers/number"

const GameStats: React.FC = () => {
  const stats = [
    {
      title: "Total Players",
      value: 7185456,
    },
    {
      title: "Dailly Users",
      value: 2961605,
    },
    {
      title: "Online Players",
      value: 91684,
    },
  ]

  return (
    <div className="flex-1 text-white">
      <div className="flex flex-col justify-center items-center gap-2 pb-8 border-b border-white/20">
        <span className="text-white/50 font-alt text-xl">
          Total Share Balance:
        </span>
        <BalanceDisplay balance={7804000000000} />
      </div>
      <div className="flex flex-col py-8 gap-4 font-alt">
        {stats.map((i) => (
          <div className="text-center" key={i.title}>
            <span className=" text-white/50 mb-2">{i.title}:</span>
            <div className="text-xl">{splitAndJoinNumberFromEnd(i.value)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameStats
