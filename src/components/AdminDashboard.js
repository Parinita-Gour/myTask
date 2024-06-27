import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import DashboardCount from './DashboardCount';
import UserList from './UserList';

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', background: '#f4f4f4', padding: '20px' }}>
        <h3>Sidebar</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/admin/dashboard-count">Dashboard Count</Link>
          </li>
          <li>
            <Link to="/admin/userlist">User List</Link>
          </li>
        </ul>
      </div>
      <div style={{ marginLeft: '20px', padding: '20px', flex: 1 }}>
        <Router>
          <Route path="/admin/dashboard-count" component={DashboardCount} />
          <Route path="/admin/userlist" component={UserList} />
        </Router>
      </div>
    </div>
  );
};

export default AdminDashboard;
