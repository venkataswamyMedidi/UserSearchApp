// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;

        // Only allow alphanumeric characters
        const alphanumericValue = value.replace(/[^a-zA-Z0-9]/g, '');

        // Enforce max length of 30 characters
        if (alphanumericValue.length <= 30) {
            setSearchTerm(alphanumericValue);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() && !isSubmitting) {
            try {
                setIsSubmitting(true);
                console.log('SearchBar submitting search for:', searchTerm);
                await onSearch(searchTerm);
            } catch (error) {
                console.error('Error during search submission:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };


    const handlePaste = (e) => {
        e.preventDefault();
        console.log('Paste blocked in search field');
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search users (alphanumeric only, max 30 characters)"
                value={searchTerm}
                onChange={handleChange}
                onPaste={handlePaste}
                maxLength={30}
            />
            <button
                type="submit"
                disabled={!searchTerm.trim() || isSubmitting}
            >
                {isSubmitting ? 'Searching...' : 'Search'}
            </button>
        </form>
    );
};

export default SearchBar;