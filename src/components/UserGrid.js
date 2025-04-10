// components/UserGrid.js
import React from 'react';
import UserCard from './UserCard';

const UserGrid = ({ users }) => {
    console.log('UserGrid received users:', users);

    // Safeguard against undefined or null users prop
    const userArray = Array.isArray(users) ? users : [];

    if (userArray.length === 0) {
        return <div className="no-results">No users found</div>;
    }

    return (
        <div className="user-grid">
            {userArray.map((user, index) => {
                console.log(`Rendering user at index ${index}:`, user);
                return (
                    <UserCard
                        key={user.username || `user-${index}`}
                        user={user}
                    />
                );
            })}
        </div>
    );
};

export default UserGrid;