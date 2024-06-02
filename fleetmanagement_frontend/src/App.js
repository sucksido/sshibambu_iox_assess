import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [editingUserId, setEditingUserId] = useState(null);

  const handleEdit = (id) => {
    setEditingUserId(id);
  };

  const handleSave = () => {
    setEditingUserId(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fleet Services Management</h1>
      </header>
      <main>
        <UserForm userId={editingUserId} onSave={handleSave} />
        <UserList onEdit={handleEdit} />
      </main>
    </div>
  );
}

export default App;