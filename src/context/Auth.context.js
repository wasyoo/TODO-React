import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isConnect, setIsConnect] = useState(false);

  return (
    <AuthContext.Provider value={{isConnect, setIsConnect}}>
      {children}
    </AuthContext.Provider>
  );
};