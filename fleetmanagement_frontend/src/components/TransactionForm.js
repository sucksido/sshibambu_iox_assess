import React, { useState, useEffect } from 'react';
import { createTransaction, updateTransaction, getTransactionById } from '../services/api';

const TransactionForm = ({ transactionId, onSave }) => {
  const [transaction, setTransaction] = useState({
    accountId: '',
    date: '',
    type: '',
    amount: '',
  });

  useEffect(() => {
    if (transactionId) {
      fetchTransaction(transactionId);
    }
  }, [transactionId]);

  const fetchTransaction = async (id) => {
    try {
      const response = await getTransactionById(id);
      setTransaction(response.data);
    } catch (error) {
      console.error('Error fetching transaction:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (transactionId) {
        await updateTransaction(transactionId, transaction);
      } else {
        await createTransaction(transaction);
      }
      onSave();
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{transactionId ? 'Edit Transaction' : 'Add Transaction'}</h2>
      <input
        type="text"
        name="accountId"
        value={transaction.accountId}
        onChange={handleChange}
        placeholder="Account ID"
        required
      />
      <input
        type="date"
        name="date"
        value={transaction.date}
        onChange={handleChange}
        placeholder="Date"
        required
      />
      <input
        type="text"
        name="type"
        value={transaction.type}
        onChange={handleChange}
        placeholder="Type"
        required
      />
      <input
        type="number"
        name="amount"
        value={transaction.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TransactionForm;