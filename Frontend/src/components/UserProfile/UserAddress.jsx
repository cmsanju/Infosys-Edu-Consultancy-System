import React, { useState, useEffect } from 'react';
import './UserAddress.css';

const UserAddress = ({ userId }) => {
    const [showForm, setShowForm] = useState(false);
    const [savedAddress, setSavedAddress] = useState([]);
    const [newAddress, setNewAddress] = useState({
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
    });

    // Use userId to load saved addresses from localStorage when the component mounts
    useEffect(() => {
        if (userId) {
            const storedAddresses = localStorage.getItem(`savedAddresses_${userId}`);
            if (storedAddresses) {
                setSavedAddress(JSON.parse(storedAddresses));
            }
        }
    }, [userId]);

    // Save the updated addresses to localStorage whenever savedAddress changes
    useEffect(() => {
        if (userId && savedAddress.length > 0) {
            localStorage.setItem(`savedAddresses_${userId}`, JSON.stringify(savedAddress));
        }
    }, [savedAddress, userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    const saveAddress = () => {
        if (newAddress.AddressLine1 && newAddress.AddressLine2 && newAddress.AddressLine3) {
            const updatedAddresses = [...savedAddress, newAddress];
            setSavedAddress(updatedAddresses);
            setNewAddress({ AddressLine1: '', AddressLine2: '', AddressLine3: '' });
            setShowForm(false);
        } else {
            alert('Please fill out all address fields.');
        }
    };

    const deleteAddress = (index) => {
        const updatedAddresses = savedAddress.filter((_, i) => i !== index);
        setSavedAddress(updatedAddresses);
    };

    return (
        <div className="useraddress">
            <h1 className="mainhead1">Your Address</h1>

            {/* Address List */}
            <div className="addressin">
                {savedAddress.length > 0 ? (
                    savedAddress.map((item, index) => (
                        <div className="address" key={index}>
                            <p>{item.AddressLine1}</p>
                            <p>{item.AddressLine2}</p>
                            <p>{item.AddressLine3}</p>
                            <button
                                className="delbtn"
                                onClick={() => deleteAddress(index)}
                            >
                                &times;
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-address">No addresses added yet. Add a new address below.</p>
                )}
            </div>

            {/* Add Address Button */}
            {!showForm && (
                <button
                    className="mainbutton1 add-address-btn"
                    onClick={() => setShowForm(true)}
                >
                    Add New Address
                </button>
            )}

            {/* Add New Address Form */}
            {showForm && (
                <div className="addnew">
                    <h2 className="mainhead2">Add New Address</h2>
                    <div className="form">
                        <div className="form-group">
                            <label>Pincode</label>
                            <input
                                type="text"
                                name="AddressLine1"
                                value={newAddress.AddressLine1}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="AddressLine2"
                                value={newAddress.AddressLine2}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                name="AddressLine3"
                                value={newAddress.AddressLine3}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button className="mainbutton1" onClick={saveAddress}>
                        Save Address
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserAddress;
