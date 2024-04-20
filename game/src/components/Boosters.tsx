// src/components/Boosters.tsx
import React from "react"
import styles from "./Boosters.module.css"
import IMGtapingGuru from "assets/images/Boosters/tapingGuru.svg"
import IMGFullTank from "assets/images/Boosters/fullTank.svg"
import IMGMultiTap from "assets/images/Boosters/multiTap.svg"
import IMGEnergyLimit from "assets/images/Boosters/energyLimit.svg"
import IMGRechargingSpeed from "assets/images/Boosters/rechargingSpeed.svg"
import IMGTapBot from "assets/images/Boosters/tapBot.svg"

const Boosters: React.FC = () => {
  return (
    <div className={styles.boostersContainer}>
      <div className={styles.title}>Your Share Balance</div>
      <div className={styles.text}>balance</div>
      <div className={styles.boosterSeparator}></div>
      <div className={styles.title}>Your daily boosters:</div>
      <div className={styles.boostersRow}>
        {" "}
        {/* Новый контейнер для бустеров */}
        <div className={styles.booster}>
          <img src={IMGtapingGuru} alt="Taping Guru" />
          <div className={styles.boosterInfo}>
            <p className={styles.text}>Taping Guru</p>
            <div className={styles.text}> 3/3</div>
          </div>
        </div>
        <div className={styles.booster}>
          <img src={IMGFullTank} alt="Full Tank" />
          <div className={styles.boosterInfo}>
            <p className={styles.text}>Full Tank</p>
            <div className={styles.text}> 3/3</div>
          </div>
        </div>
      </div>
      <div className={styles.title}>Boosters:</div>
      <div className={styles.boostersColumn}>
        <div className={styles.booster}>
          <img src={IMGMultiTap} alt="Multitap" />
          <div className={styles.boosterInfo}>
            <p className={styles.text}>Multitap</p>
            <div className={styles.text}>Cost: 100 | Level: 1</div>
          </div>
        </div>
        <div className={styles.booster}>
          <img src={IMGEnergyLimit} alt="Energy Limit" />
          <div className={styles.boosterInfo}>
            <p className={styles.text}>Energy Limit</p>
            <div className={styles.text}>Cost: 200 | Level: 1</div>
          </div>
        </div>
        <div className={styles.booster}>
          <img src={IMGRechargingSpeed} alt="Recharging Speed" />
          <div className={styles.boosterInfo}>
            <p className={styles.text}>Recharging Speed</p>
            <div className={styles.text}>Cost: 300 | Level: 1</div>
          </div>
        </div>
        <div className={styles.booster}>
          <img src={IMGTapBot} alt="Tap Bot" />
          <div className={styles.boosterInfo}>
            <p className={styles.text}>Tap Bot</p>
            <div className={styles.text}>Cost: 400 | Level: 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boosters
