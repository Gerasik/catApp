import React from "react"
import ImgRef from "assets/images/navigation/refImageContainer.png"
import ImgTasks from "assets/images/navigation/taskImageContainer.png"
import ImgTap from "assets/images/navigation/tapImageContainer.png"
import ImgBoosts from "assets/images/navigation/boostsImageContainer.png"
import ImgStats from "assets/images/navigation/statsImageContainer.png"

const InterfacePanel: React.FC = () => {
  const items = [
    { img: ImgRef, label: "Ref" },
    { img: ImgTasks, label: "Task" },
    { img: ImgTap, label: "Tap" },
    { img: ImgBoosts, label: "Boost" },
    { img: ImgStats, label: "Stats" },
  ]

  return (
    <div className="text-white flex justify-between gap-2 px-6">
      {items.map((item, index) => (
        <div key={index} className="border border-white/50 rounded-xl">
          <div className="mx-2.5 object-contain">
            <img src={item.img} alt={item.label} />
          </div>
          <span className="color-red">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default InterfacePanel
