// src/components/Boosters.tsx
import React from "react"
import IMGtapingGuru from "assets/images/Boosters/tapingGuru.png"
import IMGFullTank from "assets/images/Boosters/fullTank.png"
import IMGMultiTap from "assets/images/Boosters/multiTap.png"
import IMGEnergyLimit from "assets/images/Boosters/energyLimits.png"
import IMGRechargingSpeed from "assets/images/Boosters/rhrngSpeed.png"
import IMGTapBot from "assets/images/Boosters/tapBot.png"
import IMGBalance from "assets/images/balanceAlt.png"
import IconNext from "assets/images/nextArrow.svg?react"

const arrDaily = [
  {
    img: IMGtapingGuru,
    title: "Taping Guru",
    count: 3,
    total: 3,
  },
  {
    img: IMGFullTank,
    title: "Full Tank",
    count: 3,
    total: 3,
  },
]

const arrBoosters = [
  {
    img: IMGMultiTap,
    title: "Multitap",
    cost: 100,
    level: 1,
  },
  {
    img: IMGEnergyLimit,
    title: "Energy Limit",
    cost: 200,
    level: 1,
  },
  {
    img: IMGRechargingSpeed,
    title: "Recharging Speed",
    cost: 300,
    level: 1,
  },
  {
    img: IMGTapBot,
    title: "Tap Bot",
    cost: 400,
    level: 1,
  },
]

const Boosters: React.FC = () => {
  return (
    <div className="text-white w-full flex flex-col overflow-hidden flex-1">
      <div className="text-xl text-center">Your Share Balance</div>
      <div className="flex justify-center items-center pb-8 border-b border-white/20 ">
        <img src={IMGBalance} className="h-10 mr-0.5" />
        2500
      </div>
      <div className="overflow-y-scroll scroll-auto">
        <div className="font-alt">
          <div className="mt-8 text-base mb-4 text-left">
            Your daily boosters:
          </div>
          <div className="flex w-full gap-3 justify-stretch">
            {arrDaily.map((i) => (
              <div
                className="text-xs flex gap-2 rounded-[10px] border-white/50 border px-3.5 py-2 flex-1 items-center bg-white/10"
                key={i.title}
              >
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-[45px] aspect-square object-contain"
                />
                <div className=" text-start">
                  <p className="">{i.title}</p>
                  <div className="">
                    {i.count}/{i.total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="font-alt">
          <div className="mt-8 text-base mb-4 text-left">Boosters:</div>
          <div className="flex gap-2 flex-col">
            {arrBoosters.map((i) => (
              <div
                className="text-xs flex rounded-[10px] border-white/50 border px-3.5 py-2 flex-1 items-center bg-white/10 gap-2"
                key={i.title}
              >
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-[45px] aspect-square object-contain object-center"
                />
                <div className="flex flex-col items-start flex-1">
                  <p className="">{i.title}</p>
                  <div className="flex">
                    <img src={IMGBalance} className="h-3.5 mr-0.5" /> {i.cost}
                    <span className="text-shuttleGray ml-1">
                      | Level: {i.level}
                    </span>
                  </div>
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
