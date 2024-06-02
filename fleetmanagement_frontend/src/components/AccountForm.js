import React, { useState, useEffect } from 'react';
import { createAccount, updateAccount, getAccountById } from '../services/api';

const AccountForm = ({ accountId, onSave }) => {
  const [account, setAccount] = useState({
    userId: '',
  });

  useEffect(() => {
    if (accountId) {
      fetchAccount(accountId);
    }
  }, [accountId]);

  const fetchAccount = async (id) => {
    try {
      const response = await getAccountById(id);
      setAccount(response.data);
    } catch (error) {
      console.error('Error fetching account:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (accountId) {
        await updateAccount(accountId, account);
      } else {
        await createAccount(account);
      }
      onSave();
    } catch (error) {
      console.error('Error saving account:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{accountId ? 'Edit Account' : 'Add Account'}</h2>
      <input
        type="text"
        name="userId"
        value={account.userId}
        onChange={handleChange}
        placeholder="User ID"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AccountForm;