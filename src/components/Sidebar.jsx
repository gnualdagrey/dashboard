import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Settings, LogOut, Layers } from 'lucide-react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Layers size={24} color="#6366f1" />
                    <span>AdminPanel</span>
                </div>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles.active : ''}
                            end
                        >
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users"
                            className={({ isActive }) => isActive ? styles.active : ''}
                        >
                            <Users size={20} />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) => isActive ? styles.active : ''}
                        >
                            <Settings size={20} />
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className={styles.footer}>
                <a href="#">
                    <LogOut size={20} />
                    <span>Logout</span>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar
