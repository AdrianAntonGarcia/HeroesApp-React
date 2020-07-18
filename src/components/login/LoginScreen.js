import React from 'react';

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // history.push('/');
    /**
     * Reemplaza el último lugar visitado, si el usuario vuelve hacia atrás
     * no irá al login
     */
    history.replace('/');
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
