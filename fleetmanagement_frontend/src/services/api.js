import axios from 'axios';

const API_URL = 'http://localhost:5011/api'; // Adjust this URL to match your backend API URL

// User API functions
//export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUsers = (page = 1, limit = 10) => axios.get(`${API_URL}/users?page=${page}&limit=${limit}`);
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Account API functions
export const getAccounts = () => axios.get(`${API_URL}/accounts`);
export const getAccountById = (id) => axios.get(`${API_URL}/accounts/${id}`);
export const createAccount = (account) => axios.post(`${API_URL}/accounts`, account);
export const updateAccount = (id, account) => axios.put(`${API_URL}/accounts/${id}`, account);
export const deleteAccount = (id) => axios.delete(`${API_URL}/accounts/${id}`);

// Quote API functions
export const getQuotes = () => axios.get(`${API_URL}/quotes`);
export const getQuoteById = (id) => axios.get(`${API_URL}/quotes/${id}`);
export const createQuote = (quote) => axios.post(`${API_URL}/quotes`, quote);
export const updateQuote = (id, quote) => axios.put(`${API_URL}/quotes/${id}`, quote);
export const deleteQuote = (id) => axios.delete(`${API_URL}/quotes/${id}`);

// Transaction API functions
export const getTransactions = () => axios.get(`${API_URL}/transactions`);
export const getTransactionById = (id) => axios.get(`${API_URL}/transactions/${id}`);
export const createTransaction = (transaction) => axios.post(`${API_URL}/transactions`, transaction);
export const updateTransaction = (id, transaction) => axios.put(`${API_URL}/transactions/${id}`, transaction);
export const deleteTransaction = (id) => axios.delete(`${API_URL}/transactions/${id}`);

// Vehicle API functions
export const getVehicles = () => axios.get(`${API_URL}/vehicles`);
export const getVehicleById = (id) => axios.get(`${API_URL}/vehicles/${id}`);
export const createVehicle = (vehicle) => axios.post(`${API_URL}/vehicles`, vehicle);
export const updateVehicle = (id, vehicle) => axios.put(`${API_URL}/vehicles/${id}`, vehicle);
export const deleteVehicle = (id) => axios.delete(`${API_URL}/vehicles/${id}`);
