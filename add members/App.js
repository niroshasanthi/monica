import React from 'react';
import AddChildForm from './components/AddChildForm';

function App() {
  const handleChildAdded = () => {
    console.log('Child added successfully');
    // Optionally refresh data elsewhere
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Parent Dashboard</h1>
      <AddChildForm onChildAdded={handleChildAdded} />
    </div>
  );
}

export default App;
