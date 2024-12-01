import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const Users = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '', // Add password field here
    });
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8085/api/v1/user/all');
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                    setError(null);
                } else {
                    setUsers([]);
                    setError('Failed to fetch users. Invalid data format.');
                }
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to fetch users. Please try again later.');
                setUsers([]);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingUser) {
                // Update user
                const response = await axios.put(`http://localhost:8085/api/v1/user/${editingUser.userid}`, newUser);
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.userid === editingUser.userid ? { ...user, ...newUser } : user
                    )
                );
                console.log('User updated successfully:', response.data);
            } else {
                // Add new user
                const { username, email, password } = newUser;
                const response = await axios.post('http://localhost:8085/api/v1/user/save', { username, email, password });
                setUsers((prevUsers) => [...prevUsers, response.data]);
                console.log('User added successfully:', response.data);
            }
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Failed to submit form. Please try again.');
        }
    };

    const resetForm = () => {
        setShowForm(false);
        setEditingUser(null);
        setNewUser({ username: '', email: '', password: '' });
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
        setNewUser({ username: user.username, email: user.email, password: '' });
        setShowForm(true);
    };

    const handleDeleteClick = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:8085/api/v1/user/${userId}`);
            console.log('User deleted successfully:', response.data);
            setUsers((prevUsers) => prevUsers.filter((user) => user.userid !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
            setError('Failed to delete user. Please try again.');
        }
    };

    return (
        <div>
            <AdminNavbar />
            <div className="admin-container-user-list">
                <AdminSidebar />
                <div className="content-container">
                    <div className="user-list-heading">
                        <h1 className="text-3xl font-bold" style={{ marginTop: '80px' }}>
                            User List
                        </h1>
                        <button
                            style={{ marginTop: '84px', marginRight: '250px' }}
                            onClick={() => setShowForm(!showForm)}
                        >
                            Add User
                        </button>
                    </div>

                    {loading && <p>Loading users...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {showForm && (
                        <div className="user-form-card">
                            <h2 className="card-heading">{editingUser ? 'Edit User' : 'Add New User'}</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={newUser.username}
                                        onChange={handleInputChange}
                                        placeholder="Enter name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={newUser.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={newUser.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>
                                <div className="form-buttons">
                                    <button type="submit">{editingUser ? 'Update' : 'Submit'}</button>
                                    <button type="button" onClick={resetForm}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {!loading && users.length > 0 && (
                        <div className="user-list-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.userid}>
                                            <td>{user.userid || 'No ID'}</td>
                                            <td>{user.username || 'No Name'}</td>
                                            <td>{user.email || 'No Email'}</td>
                                            <td>
                                                <button onClick={() => handleEditClick(user)}>Edit</button>
                                                <button onClick={() => handleDeleteClick(user.userid)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {!loading && users.length === 0 && <p>No users found.</p>}
                </div>
            </div>
        </div>
    );
};

export default Users;
