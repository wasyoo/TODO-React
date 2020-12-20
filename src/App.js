import React from 'react';
import GlobalStyle from 'static/GlobalStyle';
import { AuthProvider } from 'context/Auth.context';
import Routes from 'Routes';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <GlobalStyle />
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
