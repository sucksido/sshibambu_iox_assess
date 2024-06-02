import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from '../UserList';
import { getUsers } from '../../services/api';

jest.mock('../../services/api');

const users = [
  { id: 1, firstName: 'FirstName1', lastName: 'LastName1', email: 'user1@example.com' },
  { id: 2, firstName: 'FirstName2', lastName: 'LastName2', email: 'user2@example.com' }
];

describe('UserList', () => {
  beforeEach(() => {
    getUsers.mockResolvedValue({ data: users });
  });

  test('renders user list', async () => {
    render(<UserList onEdit={jest.fn()} />);

    const userList = await screen.findAllByRole('row');
    expect(userList).toHaveLength(users.length + 1); // +1 for the header row
  });

  test('delete user', async () => {
    render(<UserList onEdit={jest.fn()} />);

    const deleteButtons = await screen.findAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(getUsers).toHaveBeenCalledTimes(2);
  });
});
