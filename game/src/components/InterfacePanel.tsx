import React from "react"

import { NavigationInterface, NavigationItem } from "types/navigation"
import cn from "classnames"

interface Props {
  navigationInterface: NavigationItem[]
  activeInterface: NavigationInterface
  setActiveInterface: (activeInterface: NavigationInterface) => void
}

const InterfacePanel: React.FC<Props> = ({
  navigationInterface,
  activeInterface,
  setActiveInterface,
}) => {
  return (
    <div className="text-white flex justify-between gap-2">
      {navigationInterface.map((item) => (
        <button
          key={item.label}
          className={cn(
            "border border-white/50 rounded-xl text-center active:scale-90 transition-all duration-300",
            {
              "bg-activeNavElement/30 border-activeNavElement":
                item.label === activeInterface,
            }
          )}
          onClick={() => setActiveInterface(item.label)}
        >
          <div className="mx-2.5 object-contain">
            <img src={item.img} alt={item.label} />
          </div>
          <span className="color-red">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export default InterfacePanel
