import React, { useState, useEffect } from 'react';
import { createQuote, updateQuote, getQuoteById } from '../services/api';

const QuoteForm = ({ quoteId, onSave }) => {
  const [quote, setQuote] = useState({
    accountId: '',
    date: '',
    validTo: '',
    quoteNumber: '',
    description: '',
    amount: '',
    status: '',
  });

  useEffect(() => {
    if (quoteId) {
      fetchQuote(quoteId);
    }
  }, [quoteId]);

  const fetchQuote = async (id) => {
    try {
      const response = await getQuoteById(id);
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuote({ ...quote, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (quoteId) {
        await updateQuote(quoteId, quote);
      } else {
        await createQuote(quote);
      }
      onSave();
    } catch (error) {
      console.error('Error saving quote:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{quoteId ? 'Edit Quote' : 'Add Quote'}</h2>
      <input
        type="text"
        name="accountId"
        value={quote.accountId}
        onChange={handleChange}
        placeholder="Account ID"
        required
      />
      <input
        type="date"
        name="date"
        value={quote.date}
        onChange={handleChange}
        placeholder="Date"
        required
      />
      <input
        type="date"
        name="validTo"
        value={quote.validTo}
        onChange={handleChange}
        placeholder="Valid To"
        required
      />
      <input
        type="text"
        name="quoteNumber"
        value={quote.quoteNumber}
        onChange={handleChange}
        placeholder="Quote Number"
        required
      />
      <input
        type="text"
        name="description"
        value={quote.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="amount"
        value={quote.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="status"
        value={quote.status}
        onChange={handleChange}
        placeholder="Status"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default QuoteForm;