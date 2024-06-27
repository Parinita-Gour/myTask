import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard'; // Create this component
import UserList from './components/UserList'; // Create this component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/admin/userlist" component={UserList} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
