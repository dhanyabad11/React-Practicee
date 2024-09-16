// components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, isAuthenticated }) {
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
}

export default PrivateRoute;
