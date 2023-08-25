import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User() {
  const [users, setUsers] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then(res => {
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
        setSelectedTasks(prevSelectedTasks => prevSelectedTasks.filter(taskId => taskId !== id));
      })
      .catch(err => console.log(err));
  };

  const toggleCheckbox = (id) => {
    if (selectedTasks.includes(id)) {
      setSelectedTasks(prevSelectedTasks => prevSelectedTasks.filter(taskId => taskId !== id));
    } else {
      setSelectedTasks(prevSelectedTasks => [...prevSelectedTasks, id]);
    }
  };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>User Tasks</h1>
            <Link to='/'><button className='btn btn-danger'>Logout</button></Link>
            </div>
            <Link to='/create' className='btn btn-success mb-2'>Add +</Link>
            <table className='table'>
            <thead>
                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                <tr key={user._id}>
                    <td>{user.title}</td>
                    <td>{user.description}</td>
                    <td>
                    <Link to={`/update/${user._id}`} className={`btn btn-success ${selectedTasks.includes(user._id) ? 'd-none' : ''}`}>Update</Link>
                    <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                    <input type="checkbox" checked={selectedTasks.includes(user._id)} onChange={() => toggleCheckbox(user._id)} />
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
}

export default User;