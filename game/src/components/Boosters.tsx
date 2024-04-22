import React, { useContext, useState } from "react"
import IMGBalance from "assets/images/balanceAlt.png"
import IconNext from "assets/images/nextArrow.svg?react"
import BalanceDisplay from "./BalanceDisplay"
import BoostersContext, { Booster } from "../Contexts/BoostersContext"

const Boosters: React.FC = () => {
  const { dailyBoosters, boosters, updateBooster, activateBooster } = useContext(BoostersContext)
  const [clickedBooster, setClickedBooster] = useState<string | null>(null)

  const getBoosterMaxLevelText = (booster: Booster) => {
    if (booster.title === "Multitap" || booster.title === "Energy Limit") {
      return booster.level === 30 ? "Max Level Reached" : ""
    } else if (booster.title === "Recharging Speed") {
      return booster.level === 10 ? "Max Level Reached" : ""
    }
    return ""
  }

  const isBoosterMaxLevel = (booster: Booster) => {
    if (booster.title === "Multitap" || booster.title === "Energy Limit") {
      return booster.level === 30
    } else if (booster.title === "Recharging Speed") {
      return booster.level === 10
    }
    return false
  }

  const handleBoosterClick = (booster: Booster) => {
    if (!isBoosterMaxLevel(booster)) {
      updateBooster(booster.title)
      setClickedBooster(booster.title)
      setTimeout(() => setClickedBooster(null), 500)
    }
  }

  return (
    <div className="text-white w-full flex flex-col overflow-hidden flex-1">
      <div className="border-b border-white/20 pb-8">
        <div className="text-xl text-center">Your Share Balance</div>
        <BalanceDisplay balance={2500} />
      </div>
      <div className="overflow-y-scroll scroll-auto">
        <div className="font-alt">
          <div className="mt-8 text-base mb-4 text-left">Your daily boosters:</div>
          <div className="flex w-full gap-3 justify-stretch">
            {dailyBoosters.map((booster) => (
              <div
                className="text-xs flex gap-2 rounded-[10px] border-white/50 border px-3.5 py-2 flex-1 items-center bg-white/10 cursor-pointer transition-all duration-500 ease-in-out hover:bg-white/20"
                key={booster.title}
                onClick={() => activateBooster(booster.title)}
              >
                <img
                  src={booster.img}
                  alt={booster.title}
                  className="w-[45px] aspect-square object-contain"
                />
                <div className="text-start">
                  <p>{booster.title}</p>
                  <div>
                    {booster.count}/{booster.total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="font-alt">
          <div className="mt-8 text-base mb-4 text-left">Boosters:</div>
          <div className="flex gap-2 flex-col">
            {boosters.map((booster) => (
              <div
                key={booster.title}
                className={`text-xs flex rounded-[10px] border-white/50 border px-3.5 py-2 flex-1 items-center bg-white/10 gap-2 transition-all duration-500 ease-in-out ${isBoosterMaxLevel(booster) ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-white/20"
                  } ${clickedBooster === booster.title ? "bg-white/30" : ""}`}
                onClick={() => handleBoosterClick(booster)}
              >
                <img
                  src={booster.img}
                  alt={booster.title}
                  className="w-[45px] aspect-square object-contain object-center"
                />
                <div className="flex flex-col items-start flex-1">
                  <p>{booster.title}</p>
                  <div className="flex">
                    <img src={IMGBalance} className="h-3.5 mr-0.5" /> {booster.cost}
                    <span className="text-shuttleGray ml-1">| Level: {booster.level}</span>
                  </div>
                  {isBoosterMaxLevel(booster) && (
                    <p className="text-red-500 text-xs mt-1">{getBoosterMaxLevelText(booster)}</p>
                  )}
                </div>
                <IconNext />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boosters
