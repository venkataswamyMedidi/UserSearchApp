// App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserGrid from './components/UserGrid';
import { searchUsers } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (searchString) => {
    console.log("🔍 handleSearch called with:", searchString);
    setLoading(true);
    setError(null);
    setSearchPerformed(true);

    try {
      console.log('Searching for:', searchString);
      const data = await searchUsers(searchString);
      console.log('Data received from API in App.js:', data);

      // Make sure we're setting an array to the users state
      setUsers(Array.isArray(data) ? data : []);

      if (Array.isArray(data) && data.length === 0) {
        console.log('No users found for the search term');
      }
    } catch (err) {
      console.error('Search error in App.js:', err);
      setError('Failed to fetch users. Please try again.');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>User Search</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />

        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}

        {!loading && !error && searchPerformed && (
          <UserGrid users={users} />
        )}
      </main>
    </div>
  );
}

export default App;