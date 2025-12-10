// Mock data for initial state
export const initialStats = [
    {
        id: '1',
        metric_name: 'Total Users',
        value: '2,543',
        change_percentage: 12.5,
        trend: 'up',
        icon: 'Users'
    },
    {
        id: '2',
        metric_name: 'Revenue',
        value: '$45,231',
        change_percentage: 8.2,
        trend: 'up',
        icon: 'DollarSign'
    },
    {
        id: '3',
        metric_name: 'Active Sessions',
        value: '1,234',
        change_percentage: -3.1,
        trend: 'down',
        icon: 'Activity'
    },
    {
        id: '4',
        metric_name: 'Conversion Rate',
        value: '3.24%',
        change_percentage: 5.7,
        trend: 'up',
        icon: 'TrendingUp'
    }
]

export const initialActivities = [
    {
        id: '1',
        user_name: 'John Doe',
        action: 'Completed purchase',
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        status: 'completed'
    },
    {
        id: '2',
        user_name: 'Jane Smith',
        action: 'Updated profile',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        status: 'completed'
    },
    {
        id: '3',
        user_name: 'Mike Johnson',
        action: 'Uploaded document',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        status: 'pending'
    },
    {
        id: '4',
        user_name: 'Sarah Williams',
        action: 'Sent message',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        status: 'completed'
    },
    {
        id: '5',
        user_name: 'Tom Brown',
        action: 'Failed payment',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
        status: 'failed'
    }
]

export const initialUsers = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        status: 'active',
        joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365).toISOString() // 1 year ago
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'User',
        status: 'active',
        joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 180).toISOString() // 6 months ago
    },
    {
        id: '3',
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        role: 'User',
        status: 'active',
        joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString() // 3 months ago
    },
    {
        id: '4',
        name: 'Sarah Williams',
        email: 'sarah.williams@example.com',
        role: 'Editor',
        status: 'active',
        joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString() // 2 months ago
    },
    {
        id: '5',
        name: 'Tom Brown',
        email: 'tom.brown@example.com',
        role: 'User',
        status: 'inactive',
        joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString() // 1 month ago
    }
]
