import React from 'react'
import { Menu, Search, Bell } from 'lucide-react'
import styles from './Topbar.module.css'

const Topbar = ({ onMenuClick }) => {
    return (
        <header className={styles.topbar}>
            <div className={styles.toggle} onClick={onMenuClick}>
                <Menu size={24} />
            </div>

            <div className={styles.search}>
                <Search size={20} className={styles.searchIcon} />
                <input type="text" placeholder="Search..." />
            </div>

            <div className={styles.profile}>
                <div className={styles.notifications}>
                    <Bell size={20} />
                    <span className={styles.badge}></span>
                </div>

                <div className={styles.userInfo}>
                    <img
                        src="https://ui-avatars.com/api/?name=Geo+Grey&background=0D8ABC&color=fff"
                        alt="Profile"
                    />
                    <span>Geo Grey</span>
                </div>
            </div>
        </header>
    )
}

export default Topbar
