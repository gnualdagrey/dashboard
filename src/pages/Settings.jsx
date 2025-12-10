import React, { useState } from 'react'
import { User, Bell, Lock, Palette, Globe, Save } from 'lucide-react'
import toast from 'react-hot-toast'
import styles from './Settings.module.css'

const Settings = () => {
    const [settings, setSettings] = useState({
        // Profile settings
        displayName: 'Geoffrey Grey',
        email: 'geoffrey.grey@example.com',

        // Notification settings
        emailNotifications: true,
        pushNotifications: false,
        weeklyReport: true,

        // Appearance settings
        theme: 'light',
        language: 'en',

        // Privacy settings
        profileVisibility: 'public',
        showEmail: false
    })

    const handleChange = (field, value) => {
        setSettings(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSave = () => {
        // Save to localStorage
        localStorage.setItem('dashboard_settings', JSON.stringify(settings))
        toast.success('Settings saved successfully!')
    }

    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <div>
                    <h1>Settings</h1>
                    <p>Manage your application settings and preferences</p>
                </div>
                <button className={styles.saveBtn} onClick={handleSave}>
                    <Save size={18} />
                    Save Changes
                </button>
            </div>

            <div className={styles.settingsGrid}>
                {/* Profile Settings */}
                <div className={styles.settingCard}>
                    <div className={styles.cardHeader}>
                        <User size={20} />
                        <h2>Profile Settings</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.formGroup}>
                            <label>Display Name</label>
                            <input
                                type="text"
                                value={settings.displayName}
                                onChange={(e) => handleChange('displayName', e.target.value)}
                                placeholder="Enter your display name"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={settings.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className={styles.settingCard}>
                    <div className={styles.cardHeader}>
                        <Bell size={20} />
                        <h2>Notifications</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.toggleGroup}>
                            <div className={styles.toggleItem}>
                                <div>
                                    <label>Email Notifications</label>
                                    <p>Receive notifications via email</p>
                                </div>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={settings.emailNotifications}
                                        onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                            <div className={styles.toggleItem}>
                                <div>
                                    <label>Push Notifications</label>
                                    <p>Receive push notifications in browser</p>
                                </div>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={settings.pushNotifications}
                                        onChange={(e) => handleChange('pushNotifications', e.target.checked)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                            <div className={styles.toggleItem}>
                                <div>
                                    <label>Weekly Report</label>
                                    <p>Get a weekly summary via email</p>
                                </div>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={settings.weeklyReport}
                                        onChange={(e) => handleChange('weeklyReport', e.target.checked)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Appearance Settings */}
                <div className={styles.settingCard}>
                    <div className={styles.cardHeader}>
                        <Palette size={20} />
                        <h2>Appearance</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.formGroup}>
                            <label>Theme</label>
                            <select
                                value={settings.theme}
                                onChange={(e) => handleChange('theme', e.target.value)}
                            >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Language</label>
                            <select
                                value={settings.language}
                                onChange={(e) => handleChange('language', e.target.value)}
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Privacy Settings */}
                <div className={styles.settingCard}>
                    <div className={styles.cardHeader}>
                        <Lock size={20} />
                        <h2>Privacy</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.formGroup}>
                            <label>Profile Visibility</label>
                            <select
                                value={settings.profileVisibility}
                                onChange={(e) => handleChange('profileVisibility', e.target.value)}
                            >
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                                <option value="friends">Friends Only</option>
                            </select>
                        </div>
                        <div className={styles.toggleGroup}>
                            <div className={styles.toggleItem}>
                                <div>
                                    <label>Show Email Address</label>
                                    <p>Display your email on your profile</p>
                                </div>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={settings.showEmail}
                                        onChange={(e) => handleChange('showEmail', e.target.checked)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
