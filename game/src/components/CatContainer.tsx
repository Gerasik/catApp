import React, { useState, useRef } from "react"
import styles from "./CatContainer.module.css"
import IMGCat1 from "assets/images/cat1.svg"
import IMGCat2 from "assets/images/cat2.svg"

const CatContainer: React.FC = () => {
  const [clawsOut, setClawsOut] = useState(false)
  const [scorePositions, setScorePositions] = useState<
    { x: number; y: number }[]
  >([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: React.MouseEvent) => {
    setClawsOut((prev) => !prev)
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setScorePositions((prev) => [...prev, { x, y }])
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0 && containerRef.current) {
      setClawsOut((prev) => !prev)
      const rect = containerRef.current.getBoundingClientRect()
      Array.from(e.touches).forEach((touch) => {
        const x = touch.clientX - rect.left
        const y = touch.clientY - rect.top
        setScorePositions((prev) => [...prev, { x, y }])
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className={styles.catContainer}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
    >
      <img
        src={clawsOut ? IMGCat1 : IMGCat2}
        alt="Cat"
        className={styles.catImage}
      />
      {scorePositions.map((position, index) => (
        <div
          key={index}
          className={styles.scoreAnimation}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
          +10
        </div>
      ))}
    </div>
  )
}

export default CatContainer
