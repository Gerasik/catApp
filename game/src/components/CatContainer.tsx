import React, { useState, useRef } from "react"
import IMGCat1 from "assets/images/cat1.svg"
import IMGCat2 from "assets/images/cat2.svg"
import BalanceDisplay from "./BalanceDisplay"

const CatContainer: React.FC = () => {
  const [clawsOut, setClawsOut] = useState(false)
  const [scorePositions, setScorePositions] = useState<
    { x: number; y: number }[]
  >([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0 && containerRef.current) {
      setClawsOut(() => true)
      const rect = containerRef.current.getBoundingClientRect()
      Array.from(e.touches).forEach((touch) => {
        const x = touch.clientX - rect.left
        const y = touch.clientY - rect.top
        setScorePositions((prev) => [...prev, { x, y }])
      })
    }
  }

  const handleTouchEnd = () => {
    setClawsOut(() => false)
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <BalanceDisplay balance={13013413413} />
      <img
        src={!clawsOut ? IMGCat1 : IMGCat2}
        alt="Cat"
        className="h-screen absolute scale-150"
      />
      {scorePositions.map((position, index) => (
        <div
          key={index}
          className="animate-scoreAnimation absolute text-2xl text-white"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
          +10
        </div>
      ))}
    </div>
  )
}

export default CatContainer
