import React, { useEffect, useState } from 'react';
import { getAccounts, deleteAccount } from '../services/api';

const AccountList = ({ onEdit }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await getAccounts();
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAccount(id);
      fetchAccounts();
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div>
      <h2>Account List</h2>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {account.id} - User ID: {account.userId}
            <button onClick={() => onEdit(account.id)}>Edit</button>
            <button onClick={() => handleDelete(account.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;