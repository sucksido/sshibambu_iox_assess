import React, { useEffect, useState } from 'react';
import { getQuotes, deleteQuote } from '../services/api';

const QuoteList = ({ onEdit }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await getQuotes();
      setQuotes(response.data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteQuote(id);
      fetchQuotes();
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  return (
    <div>
      <h2>Quote List</h2>
      <ul>
        {quotes.map(quote => (
          <li key={quote.id}>
            {quote.id} - Quote Number: {quote.quoteNumber}
            <button onClick={() => onEdit(quote.id)}>Edit</button>
            <button onClick={() => handleDelete(quote.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;