import React, { useState, useEffect } from 'react'
import { Edit2, Trash2, Plus, Mail, Shield } from 'lucide-react'
import toast from 'react-hot-toast'
import { getUsers, createUser, updateUser, deleteUser } from '../services/localStorageService'
import { formatDate, capitalize } from '../utils/formatters'
import Modal from '../components/Modal'
import UserForm from '../components/UserForm'
import styles from './Users.module.css'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingUser, setEditingUser] = useState(null)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        setLoading(true)
        // Simulate async operation
        setTimeout(() => {
            const data = getUsers()
            setUsers(data || [])
            setLoading(false)
        }, 300)
    }

    const handleCreate = (formData) => {
        try {
            const newUser = createUser(formData)
            toast.success('User created successfully')
            setUsers(prev => [newUser, ...prev])
            setIsModalOpen(false)
        } catch (error) {
            toast.error('Failed to create user')
            console.error(error)
        }
    }

    const handleUpdate = (formData) => {
        try {
            const updatedUser = updateUser(editingUser.id, formData)
            toast.success('User updated successfully')
            setUsers(prev => prev.map(u => u.id === updatedUser.id ? updatedUser : u))
            setIsModalOpen(false)
            setEditingUser(null)
        } catch (error) {
            toast.error('Failed to update user')
            console.error(error)
        }
    }

    const handleDelete = (id) => {
        if (!confirm('Are you sure you want to delete this user?')) return

        try {
            deleteUser(id)
            toast.success('User deleted successfully')
            setUsers(prev => prev.filter(u => u.id !== id))
        } catch (error) {
            toast.error('Failed to delete user')
            console.error(error)
        }
    }

    const openCreateModal = () => {
        setEditingUser(null)
        setIsModalOpen(true)
    }

    const openEditModal = (user) => {
        setEditingUser(user)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingUser(null)
    }

    const handleFormSubmit = (formData) => {
        if (editingUser) {
            handleUpdate(formData)
        } else {
            handleCreate(formData)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <div>
                    <h1>Users Management</h1>
                    <p>Manage user accounts and permissions</p>
                </div>
                <button className={styles.addBtn} onClick={openCreateModal}>
                    <Plus size={18} />
                    Add User
                </button>
            </div>

            <div className={styles.tableCard}>
                {loading ? (
                    <div className={styles.loading}>Loading users...</div>
                ) : users.length === 0 ? (
                    <div className={styles.empty}>
                        <p>No users yet</p>
                        <button onClick={openCreateModal}>Create your first user</button>
                    </div>
                ) : (
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Join Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <div className={styles.userCell}>
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                                                    alt={user.name}
                                                />
                                                <span>{user.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.emailCell}>
                                                <Mail size={14} />
                                                {user.email}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.roleCell}>
                                                <Shield size={14} />
                                                {user.role}
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`${styles.status} ${styles[user.status]}`}>
                                                {capitalize(user.status)}
                                            </span>
                                        </td>
                                        <td>{formatDate(user.joinDate)}</td>
                                        <td>
                                            <div className={styles.actionButtons}>
                                                <button
                                                    className={styles.editBtn}
                                                    onClick={() => openEditModal(user)}
                                                    title="Edit"
                                                >
                                                    <Edit2 size={16} />
                                                </button>
                                                <button
                                                    className={styles.deleteBtn}
                                                    onClick={() => handleDelete(user.id)}
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
                    </div>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={editingUser ? 'Edit User' : 'Create User'}
            >
                <UserForm
                    user={editingUser}
                    onSubmit={handleFormSubmit}
                    onCancel={closeModal}
                />
            </Modal>
        </div>
    )
}

export default Users
