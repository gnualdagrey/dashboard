import { initialStats, initialActivities, initialUsers } from '../data/mockData'

const STORAGE_KEYS = {
    STATS: 'dashboard_stats',
    ACTIVITIES: 'dashboard_activities',
    USERS: 'dashboard_users'
}

// Initialize localStorage with mock data if empty
const initializeStorage = () => {
    if (!localStorage.getItem(STORAGE_KEYS.STATS)) {
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(initialStats))
    }
    if (!localStorage.getItem(STORAGE_KEYS.ACTIVITIES)) {
        localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(initialActivities))
    }
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(initialUsers))
    }
}

// Stats operations
export const getStats = () => {
    initializeStorage()
    const data = localStorage.getItem(STORAGE_KEYS.STATS)
    return JSON.parse(data)
}

export const updateStat = (id, updates) => {
    const stats = getStats()
    const updatedStats = stats.map(stat =>
        stat.id === id ? { ...stat, ...updates } : stat
    )
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updatedStats))
    return updatedStats.find(stat => stat.id === id)
}

// Activity operations
export const getActivities = () => {
    initializeStorage()
    const data = localStorage.getItem(STORAGE_KEYS.ACTIVITIES)
    return JSON.parse(data)
}

export const createActivity = (activity) => {
    const activities = getActivities()
    const newActivity = {
        id: Date.now().toString(),
        ...activity,
        timestamp: new Date().toISOString()
    }
    const updatedActivities = [newActivity, ...activities]
    localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(updatedActivities))
    return newActivity
}

export const updateActivity = (id, updates) => {
    const activities = getActivities()
    const updatedActivities = activities.map(activity =>
        activity.id === id ? { ...activity, ...updates } : activity
    )
    localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(updatedActivities))
    return updatedActivities.find(activity => activity.id === id)
}

export const deleteActivity = (id) => {
    const activities = getActivities()
    const updatedActivities = activities.filter(activity => activity.id !== id)
    localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(updatedActivities))
    return true
}

// User operations
export const getUsers = () => {
    initializeStorage()
    const data = localStorage.getItem(STORAGE_KEYS.USERS)
    return JSON.parse(data)
}

export const createUser = (user) => {
    const users = getUsers()
    const newUser = {
        id: Date.now().toString(),
        ...user,
        joinDate: new Date().toISOString()
    }
    const updatedUsers = [newUser, ...users]
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(updatedUsers))
    return newUser
}

export const updateUser = (id, updates) => {
    const users = getUsers()
    const updatedUsers = users.map(user =>
        user.id === id ? { ...user, ...updates } : user
    )
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(updatedUsers))
    return updatedUsers.find(user => user.id === id)
}

export const deleteUser = (id) => {
    const users = getUsers()
    const updatedUsers = users.filter(user => user.id !== id)
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(updatedUsers))
    return true
}

// Reset to initial data
export const resetData = () => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(initialStats))
    localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(initialActivities))
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(initialUsers))
}
