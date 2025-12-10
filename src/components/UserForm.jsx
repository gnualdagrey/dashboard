import React, { useState, useEffect } from 'react'
import styles from './UserForm.module.css'

const UserForm = ({ user, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'User',
        status: 'active'
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                role: user.role || 'User',
                status: user.status || 'active'
            })
        }
    }, [user])

    const validate = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
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
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.error : ''}
                    placeholder="Enter full name"
                />
                {errors.name && (
                    <span className={styles.errorText}>{errors.name}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.error : ''}
                    placeholder="Enter email address"
                />
                {errors.email && (
                    <span className={styles.errorText}>{errors.email}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            <div className={styles.actions}>
                <button type="button" onClick={onCancel} className={styles.cancelBtn}>
                    Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                    {user ? 'Update' : 'Create'} User
                </button>
            </div>
        </form>
    )
}

export default UserForm
