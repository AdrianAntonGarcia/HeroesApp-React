import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // history.push('/');
    /**
     * Reemplaza el último lugar visitado, si el usuario vuelve hacia atrás
     * no irá al login
     */
    // history.replace('/');
    const action = {
      type: types.login,
      payload: {
        name: 'Adrian',
      },
    };
    dispatch(action);
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
