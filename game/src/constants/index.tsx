import ImgRef from "assets/images/navigation/refImageContainer.png"
import ImgTasks from "assets/images/navigation/taskImageContainer.png"
import ImgTap from "assets/images/navigation/tapImageContainer.png"
import ImgBoosts from "assets/images/navigation/boostsImageContainer.png"
import ImgStats from "assets/images/navigation/statsImageContainer.png"
import { NavigationItem, NavigationInterface } from "types/navigation"

export const navigationInterface: NavigationItem[] = [
  { img: ImgRef, label: NavigationInterface.REF },
  { img: ImgTasks, label: NavigationInterface.TASK },
  { img: ImgTap, label: NavigationInterface.TAP },
  { img: ImgBoosts, label: NavigationInterface.BOOST },
  { img: ImgStats, label: NavigationInterface.STATS },
]
