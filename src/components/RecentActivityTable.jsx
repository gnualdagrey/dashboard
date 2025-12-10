import React, { useState, useEffect } from 'react'
import { Edit2, Trash2, Plus } from 'lucide-react'
import toast from 'react-hot-toast'
import { getActivities, createActivity, updateActivity, deleteActivity } from '../services/localStorageService'
import { formatDate, capitalize } from '../utils/formatters'
import Modal from './Modal'
import ActivityForm from './ActivityForm'
import styles from './RecentActivityTable.module.css'

const RecentActivityTable = () => {
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingActivity, setEditingActivity] = useState(null)

    useEffect(() => {
        fetchActivities()
    }, [])

    const fetchActivities = () => {
        setLoading(true)
        // Simulate async operation
        setTimeout(() => {
            const data = getActivities()
            setActivities(data || [])
            setLoading(false)
        }, 300)
    }

    const handleCreate = (formData) => {
        try {
            const newActivity = createActivity(formData)
            toast.success('Activity created successfully')
            setActivities(prev => [newActivity, ...prev])
            setIsModalOpen(false)
        } catch (error) {
            toast.error('Failed to create activity')
            console.error(error)
        }
    }

    const handleUpdate = (formData) => {
        try {
            const updatedActivity = updateActivity(editingActivity.id, formData)
            toast.success('Activity updated successfully')
            setActivities(prev => prev.map(a => a.id === updatedActivity.id ? updatedActivity : a))
            setIsModalOpen(false)
            setEditingActivity(null)
        } catch (error) {
            toast.error('Failed to update activity')
            console.error(error)
        }
    }

    const handleDelete = (id) => {
        if (!confirm('Are you sure you want to delete this activity?')) return

        try {
            deleteActivity(id)
            toast.success('Activity deleted successfully')
            setActivities(prev => prev.filter(a => a.id !== id))
        } catch (error) {
            toast.error('Failed to delete activity')
            console.error(error)
        }
    }

    const openCreateModal = () => {
        setEditingActivity(null)
        setIsModalOpen(true)
    }

    const openEditModal = (activity) => {
        setEditingActivity(activity)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingActivity(null)
    }

    const handleFormSubmit = (formData) => {
        if (editingActivity) {
            handleUpdate(formData)
        } else {
            handleCreate(formData)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Recent Activity</h2>
                <button className={styles.addBtn} onClick={openCreateModal}>
                    <Plus size={18} />
                    Add Activity
                </button>
            </div>

            <div className={styles.tableWrapper}>
                {loading ? (
                    <div className={styles.loading}>Loading activities...</div>
                ) : activities.length === 0 ? (
                    <div className={styles.empty}>
                        <p>No activities yet</p>
                        <button onClick={openCreateModal}>Create your first activity</button>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Action</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((activity) => (
                                <tr key={activity.id}>
                                    <td>
                                        <div className={styles.userCell}>
                                            <img
                                                src={`https://ui-avatars.com/api/?name=${activity.user_name}&background=random`}
                                                alt={activity.user_name}
                                            />
                                            <span>{activity.user_name}</span>
                                        </div>
                                    </td>
                                    <td>{activity.action}</td>
                                    <td>{formatDate(activity.timestamp)}</td>
                                    <td>
                                        <span className={`${styles.status} ${styles[activity.status]}`}>
                                            {capitalize(activity.status)}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actionButtons}>
                                            <button
                                                className={styles.editBtn}
                                                onClick={() => openEditModal(activity)}
                                                title="Edit"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                className={styles.deleteBtn}
                                                onClick={() => handleDelete(activity.id)}
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={editingActivity ? 'Edit Activity' : 'Create Activity'}
            >
                <ActivityForm
                    activity={editingActivity}
                    onSubmit={handleFormSubmit}
                    onCancel={closeModal}
                />
            </Modal>
        </div>
    )
}

export default RecentActivityTable
