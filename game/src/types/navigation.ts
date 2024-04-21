export enum NavigationInterface {
  REF = "Ref",
  TASK = "Task",
  TAP = "Tap",
  BOOST = "Boost",
  STATS = "Stats",
}

export interface NavigationItem {
  img: string
  label: NavigationInterface
}
