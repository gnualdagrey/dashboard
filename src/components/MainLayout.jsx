import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={`${styles.sidebarWrapper} ${sidebarOpen ? styles.open : ''}`}>
                <Sidebar />
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className={styles.mainContent}>
                <Topbar onMenuClick={() => setSidebarOpen(true)} />
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout
