// components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
    console.log('User data received in UserCard:', user);
    return (
        <div className="user-card">
            <div className="user-image">
                <img
                    src={user.profile_pic_url}
                    alt={`${user.username}'s profile`}
                    onError={(e) => {
                        // Prevent infinite loop on fallback image
                        if (!e.target.src.includes('placeholder.com')) {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                        }
                    }}
                />
            </div>
            <div className="user-info">
                <h3>{user.fullname || 'User'}</h3>
                <p>@{user.username}</p>
            </div>
        </div>
    );
};
export default UserCard;