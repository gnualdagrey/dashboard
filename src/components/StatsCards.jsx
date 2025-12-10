import React, { useState, useEffect } from 'react'
import { Users, DollarSign, Activity, TrendingUp, TrendingDown } from 'lucide-react'
import { getStats } from '../services/localStorageService'
import styles from './StatsCards.module.css'

const iconMap = {
    'Users': Users,
    'DollarSign': DollarSign,
    'Activity': Activity,
    'TrendingUp': TrendingUp
}

const colorMap = ['blue', 'green', 'yellow', 'purple']

const StatsCards = () => {
    const [stats, setStats] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchStats()
    }, [])

    const fetchStats = () => {
        setLoading(true)
        // Simulate async operation
        setTimeout(() => {
            const data = getStats()
            setStats(data || [])
            setLoading(false)
        }, 300)
    }

    if (loading) {
        return (
            <div className={styles.grid}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`${styles.card} ${styles.loading}`}>
                        <div className={styles.skeleton}></div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={styles.grid}>
            {stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon] || Users
                const color = colorMap[index % colorMap.length]

                return (
                    <div key={stat.id} className={styles.card}>
                        <div className={`${styles.iconWrapper} ${styles[color]}`}>
                            <IconComponent size={24} />
                        </div>
                        <div className={styles.info}>
                            <h3>{stat.metric_name}</h3>
                            <p className={styles.value}>{stat.value}</p>
                            <p className={`${styles.trend} ${styles[stat.trend]}`}>
                                {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                {stat.change_percentage > 0 ? '+' : ''}{stat.change_percentage}%
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default StatsCards
