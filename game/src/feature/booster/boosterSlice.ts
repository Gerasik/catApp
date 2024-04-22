import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Booster } from "types/booster"
import IMGtapingGuru from "assets/images/Boosters/tapingGuru.png"
import IMGFullTank from "assets/images/Boosters/fullTank.png"
import IMGMultiTap from "assets/images/Boosters/multiTap.png"
import IMGEnergyLimit from "assets/images/Boosters/energyLimits.png"
import IMGRechargingSpeed from "assets/images/Boosters/rhrngSpeed.png"
import IMGTapBot from "assets/images/Boosters/tapBot.png"

export interface BoosterState {
  dailyBoosters: Booster[]
  boosters: Booster[]
}

const multitapCosts = [
  100, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000,
  1000000, 2000000, 4000000, 8000000, 16000000, 32000000, 65500000, 130000000,
  262000000, 524000000, 1048000000, 2090000000, 4100000000, 8400000000,
  16500000000, 33500000000, 67100000000, 99900000000,
]

const rechargingSpeedCosts = [
  1000, 10000, 100000, 250000, 500000, 1000000, 2500000, 5000000, 10000000,
]

const initialState: BoosterState = {
  dailyBoosters: [
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
  ],
  boosters: [
    {
      img: IMGMultiTap,
      title: "Multitap",
      cost: multitapCosts[0],
      level: 1,
    },
    {
      img: IMGEnergyLimit,
      title: "Energy Limit",
      cost: 500,
      level: 1,
    },
    {
      img: IMGRechargingSpeed,
      title: "Recharging Speed",
      cost: rechargingSpeedCosts[0],
      level: 1,
    },
    {
      img: IMGTapBot,
      title: "Tap Bot",
      cost: 400,
      level: 1,
    },
  ],
}

export const boosterSlice = createSlice({
  name: "booster",
  initialState,
  reducers: {
    updateBooster: (state, action: PayloadAction<string>) => {
      state.boosters = state.boosters.map((booster) => {
        if (booster.title === action.payload) {
          const newLevel = (booster.level || 0) + 1
          let newCost = booster.cost || 0

          if (action.payload === "Multitap") {
            newCost = multitapCosts[newLevel - 1] || 0
          } else if (action.payload === "Energy Limit") {
            newCost = (booster.cost || 0) * 2
          } else if (action.payload === "Recharging Speed") {
            newCost = rechargingSpeedCosts[newLevel - 1] || 0
          }

          return {
            ...booster,
            level: newLevel,
            cost: newCost,
          }
        }
        return booster
      })
    },
    activateBooster: (state, action: PayloadAction<string>) => {
      state.dailyBoosters = state.dailyBoosters.map((booster) => {
        if (booster.title === action.payload && (booster.count || 0) > 0) {
          return {
            ...booster,
            count: (booster.count || 0) - 1,
          }
        }
        return booster
      })
    },
  },
})

export const { updateBooster, activateBooster } = boosterSlice.actions

export default boosterSlice.reducer
