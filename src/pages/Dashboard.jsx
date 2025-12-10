import React from 'react'
import StatsCards from '../components/StatsCards'
import RecentActivityTable from '../components/RecentActivityTable'

const Dashboard = () => {
    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Dashboard Overview</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Welcome back, here's what's happening today.</p>
            </div>

            <StatsCards />

            <div style={{ marginTop: '2rem' }}>
                <RecentActivityTable />
            </div>
        </>
    )
}

export default Dashboard
