import React, { useState, useEffect } from 'react';
import './AdminPayment.css';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';

const AdminPayment = () => {
    const [showForm, setShowForm] = useState(false);
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState(null);
    const [newPayment, setNewPayment] = useState({
        username: '',
    });

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:8085/api/payments');
                setPayments(response.data);
            } catch (error) {
                setError('Failed to fetch payments. Please try again.');
            }
        };
        fetchPayments();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPayment((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Automatically add method and status to the payment object
        const paymentData = {
            ...newPayment,
            method: 'Card', // Always "Card"
            status: 'Completed', // Always "Completed"
        };

        try {
            const response = await axios.post('http://localhost:8085/api/payments', paymentData);
            setPayments((prevPayments) => [...prevPayments, response.data]);
            setShowForm(false);
            setNewPayment({ username: '' });
        } catch (error) {
            console.error('Error saving payment:', error);
            setError('Failed to submit payment. Please try again.');
        }
    };

    return (
        <div>
            <AdminNavbar />
            <div className="admin-container-payment-list">
                <AdminSidebar />
                <div className="content-container">
                    <div className="payment-list-heading">
                        <h1 className="text-3xl font-bold" style={{ marginTop: '80px' }}>
                            Payment List
                        </h1>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {/* Payment Form */}
                    {showForm && (
                        <div className="payment-form-card">
                            <h2 className="card-heading">Add New Payment</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={newPayment.username}
                                        onChange={handleInputChange}
                                        placeholder="Enter User Name"
                                        required
                                    />
                                </div>
                                <div className="form-buttons">
                                    <button type="submit">Submit</button>
                                    <button type="button" onClick={() => setShowForm(false)}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Payment List Table */}
                    <div className="payment-list-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment ID</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Method</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment) => (
                                    <tr key={payment.id}>
                                        <td>{payment.id}</td>
                                        <td>{payment.username}</td>
                                        <td>{payment.email}</td>
                                        <td>{payment.phoneNumber}</td>
                                        <td>Card</td> {/* Displaying method */}
                                        <td>Completed</td> {/* Displaying status */}
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

export default AdminPayment;
