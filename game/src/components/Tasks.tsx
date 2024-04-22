import BalanceDisplay from "./BalanceDisplay"
import IconNext from "assets/images/nextArrow.svg?react"
import IMGPetСаge from "assets/images/leagues/petСаge.png"
import { useState } from "react"
import { TaskNav } from "types/task"
import classNames from "classnames"

const Tasks = () => {
  const [nav, setNav] = useState<TaskNav>(TaskNav.LEAGUES)

  return (
    <div className="text-white w-full flex flex-col overflow-hidden flex-1">
      <div className="border-b border-white/20 pb-8 flex flex-col gap-2">
        <BalanceDisplay balance={2500} />
        <div className="text-xl text-center flex items-center justify-center gap-3">
          <img src={IMGPetСаge} className="h-5" />
          Some League <IconNext />
        </div>
      </div>
      <div className="overflow-y-scroll scroll-auto pt-8">
        <div className="flex gap-2 p-[5px] rounded-[10px] border border-white/20">
          {Object.entries(TaskNav).map(([key, val]) => (
            <button
              className={classNames(
                "flex-1 font-alt font-normal rounded-[5px] py-2.5 relative",
                {
                  "bg-white/10": val === nav,
                }
              )}
              onClick={() => {
                setNav(val)
              }}
              key={key}
            >
              {val}
              <div className="bg-bgNotify w-2.5 h-2.5 absolute top-[5px] right-[5px] rounded-full"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
