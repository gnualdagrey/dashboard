import React, { useState, useEffect } from 'react'
import styles from './ActivityForm.module.css'

const ActivityForm = ({ activity, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        user_name: '',
        action: '',
        status: 'completed'
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (activity) {
            setFormData({
                user_name: activity.user_name || '',
                action: activity.action || '',
                status: activity.status || 'completed'
            })
        }
    }, [activity])

    const validate = () => {
        const newErrors = {}

        if (!formData.user_name.trim()) {
            newErrors.user_name = 'User name is required'
        }

        if (!formData.action.trim()) {
            newErrors.action = 'Action is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validate()) {
            onSubmit(formData)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="user_name">User Name</label>
                <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className={errors.user_name ? styles.error : ''}
                    placeholder="Enter user name"
                />
                {errors.user_name && (
                    <span className={styles.errorText}>{errors.user_name}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="action">Action</label>
                <input
                    type="text"
                    id="action"
                    name="action"
                    value={formData.action}
                    onChange={handleChange}
                    className={errors.action ? styles.error : ''}
                    placeholder="Enter action description"
                />
                {errors.action && (
                    <span className={styles.errorText}>{errors.action}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                </select>
            </div>

            <div className={styles.actions}>
                <button type="button" onClick={onCancel} className={styles.cancelBtn}>
                    Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                    {activity ? 'Update' : 'Create'} Activity
                </button>
            </div>
        </form>
    )
}

export default ActivityForm
