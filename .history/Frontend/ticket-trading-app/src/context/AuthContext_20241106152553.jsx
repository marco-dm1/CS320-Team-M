import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of our user type
const userShape = PropTypes.shape({
  id: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string
});

// Define the shape of our context
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Create the value object with proper typing
  const value = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Add prop-types validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Define default props
AuthProvider.defaultProps = {
  children: null
};

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;