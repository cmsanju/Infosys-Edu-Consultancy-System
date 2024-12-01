import React, { useState } from 'react';
import './AdminSubscription.css';
import AdminSidebar from './AdminSidebar'; // Import the sidebar component
import AdminNavbar from './AdminNavbar';

const AdminSubscription = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingSubscription, setEditingSubscription] = useState(null); // Keep track of the subscription being edited
    const [newSubscription, setNewSubscription] = useState({
        username: '',
        startDate: '',
        endDate: '',
        status: '',
    });

    // Initial subscriptions data
    const [subscriptions, setSubscriptions] = useState([
        { id: 1, username: 'JohnDoe', startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active' },
        { id: 2, username: 'JaneSmith', startDate: '2024-03-15', endDate: '2024-09-15', status: 'Expired' },
        // Add more subscriptions here
    ]);

    // Handle the form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSubscription((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission for new subscription or edited subscription
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingSubscription) {
            // Handle subscription update logic (e.g., API call to update subscription)
            setSubscriptions((prevSubscriptions) =>
                prevSubscriptions.map((subscription) =>
                    subscription.id === editingSubscription.id
                        ? { ...subscription, ...newSubscription }
                        : subscription
                )
            );
            console.log("Subscription Updated: ", newSubscription);
        } else {
            // Logic to add a new subscription (e.g., push to list or send to API)
            const newSubscriptionWithId = { ...newSubscription, id: subscriptions.length + 1 }; // Generate a new subscription ID
            setSubscriptions((prevSubscriptions) => [...prevSubscriptions, newSubscriptionWithId]);
            console.log("New Subscription Added: ", newSubscriptionWithId);
        }
        // After submitting, hide the form
        setShowForm(false);
        setEditingSubscription(null); // Reset editing subscription state
        setNewSubscription({
            username: '',
            startDate: '',
            endDate: '',
            status: '',
        });
    };

    // Handle edit button click
    const handleEditClick = (subscription) => {
        setEditingSubscription(subscription); // Set the subscription to be edited
        setNewSubscription({ 
            username: subscription.username, 
            startDate: subscription.startDate, 
            endDate: subscription.endDate,
            status: subscription.status 
        }); // Populate form with subscription data
        setShowForm(true); // Show the form
    };

    // Handle delete button click
    const handleDeleteClick = (subscriptionId) => {
        // Remove the subscription from the state
        setSubscriptions((prevSubscriptions) =>
            prevSubscriptions.filter((subscription) => subscription.id !== subscriptionId)
        );
        console.log('Subscription Deleted with ID:', subscriptionId);
    };

    return (
        <div><AdminNavbar/>
        <div className="admin-container-subscription-list">
            <AdminSidebar />

            <div className="content-container">
                <div className="subscription-list-heading">
                    <h1 className="text-3xl font-bold" style={{ marginTop: '80px' }}>
                        Subscription List
                    </h1>
                    <button
                        style={{ marginTop: '84px', marginRight: '250px' }}
                        onClick={() => setShowForm(!showForm)} // Toggle form visibility
                    >
                        Add Subscription
                    </button>
                </div>

                {showForm && (
                    <div className="subscription-form-card">
                        <h2 className="card-heading">{editingSubscription ? 'Edit Subscription' : 'Add New Subscription'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={newSubscription.username}
                                    onChange={handleInputChange}
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                            <div className="input-container">
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    value={newSubscription.startDate}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-container">
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    value={newSubscription.endDate}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-container">
                                <select
                                    id="status"
                                    name="status"
                                    value={newSubscription.status}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Active">Active</option>
                                    <option value="Expired">Expired</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                            <div className="form-buttons">
                                <button type="submit">{editingSubscription ? 'Update' : 'Submit'}</button>
                                <button type="button" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="subscription-list-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions.map((subscription) => (
                                <tr key={subscription.id}>
                                    <td>{subscription.id}</td>
                                    <td>{subscription.username}</td>
                                    <td>{subscription.startDate}</td>
                                    <td>{subscription.endDate}</td>
                                    <td>{subscription.status}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(subscription)}>Edit</button>
                                        <button onClick={() => handleDeleteClick(subscription.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdminSubscription;
