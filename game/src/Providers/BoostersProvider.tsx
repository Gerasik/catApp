import React, { useState } from 'react';
import BoostersContext, { Booster } from '../Contexts/BoostersContext';
import IMGtapingGuru from "assets/images/Boosters/tapingGuru.png"
import IMGFullTank from "assets/images/Boosters/fullTank.png"
import IMGMultiTap from "assets/images/Boosters/multiTap.png"
import IMGEnergyLimit from "assets/images/Boosters/energyLimits.png"
import IMGRechargingSpeed from "assets/images/Boosters/rhrngSpeed.png"
import IMGTapBot from "assets/images/Boosters/tapBot.png"

interface BoostersProviderProps {
    children: React.ReactNode;
}

const multitapCosts = [100, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000, 2000000, 4000000, 8000000, 16000000, 32000000, 65500000, 130000000, 262000000, 524000000, 1048000000, 2090000000, 4100000000, 8400000000, 16500000000, 33500000000, 67100000000, 99900000000];

const rechargingSpeedCosts = [1000, 10000, 100000, 250000, 500000, 1000000, 2500000, 5000000, 10000000];

const BoostersProvider: React.FC<BoostersProviderProps> = ({ children }) => {
    const [dailyBoosters, setDailyBoosters] = useState<Booster[]>([
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
    ]);

    const [boosters, setBoosters] = useState<Booster[]>([
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
    ]);

    const updateBooster = (title: string) => {
        setBoosters((prevBoosters: Booster[]) => prevBoosters.map(booster => {
            if (booster.title === title) {
                const newLevel = (booster.level || 0) + 1;
                let newCost = booster.cost || 0;

                if (title === "Multitap") {
                    newCost = multitapCosts[newLevel - 1] || 0;
                } else if (title === "Energy Limit") {
                    newCost = (booster.cost || 0) * 2;
                } else if (title === "Recharging Speed") {
                    newCost = rechargingSpeedCosts[newLevel - 1] || 0;
                }

                return {
                    ...booster,
                    level: newLevel,
                    cost: newCost,
                };
            }
            return booster;
        }));
    };

    const activateBooster = (title: string) => {
        setDailyBoosters((prevBoosters: Booster[]) => prevBoosters.map(booster => {
            if (booster.title === title && (booster.count || 0) > 0) {
                return {
                    ...booster,
                    count: (booster.count || 0) - 1,
                };
            }
            return booster;
        }));
    };

    return (
        <BoostersContext.Provider value={{ dailyBoosters, boosters, updateBooster, activateBooster }}>
            {children}
        </BoostersContext.Provider>
    );
};

export default BoostersProvider;
