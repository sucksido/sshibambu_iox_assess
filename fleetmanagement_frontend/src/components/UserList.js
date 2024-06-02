import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const response = await getUsers(page);
      setUsers(response.data.users);
      setPageCount(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers(currentPage);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">User List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-primary mx-2" onClick={() => onEdit(user.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'page-item'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link btn btn-success'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link btn btn-success'}
        containerClassName={'pagination justify-content-center'}
        activeClassName={'active'}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
    </div>
  )
};

export default UserList;
