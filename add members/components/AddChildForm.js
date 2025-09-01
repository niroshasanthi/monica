// src/components/AddChildForm.js
import React, { useState } from 'react';
import { addChild } from '../api/api';

function AddChildForm({ onChildAdded }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await addChild(username, password);
      alert(`Child added successfully! ID: ${response.data.id}`);
      setUsername('');
      setPassword('');
      if (onChildAdded) onChildAdded();
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert('Error adding child.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Add Child</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Child Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          disabled={loading}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={loading}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button type="submit" disabled={loading} style={{ padding: '10px 15px' }}>
        {loading ? 'Adding...' : 'Add Child'}
      </button>
    </form>
  );
}

export default AddChildForm;
