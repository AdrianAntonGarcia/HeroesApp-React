import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import '@testing-library/jest-dom';
import { types } from '../../../types/types';

describe('Debe de probar el componente <LoginScreen/>', () => {
  test('Debe de mostrarse correctamente ', () => {
    const dispatch = jest.fn();

    const wrapper = mount(
      <AuthContext.Provider value={{ dispatch }}>
        <LoginScreen />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de realizar el dispatch y la navegación', () => {
    const dispatch = jest.fn();
    // Storage.prototype.getItem = jest.fn();
    const history = {
      replace: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={{ dispatch }}>
        <LoginScreen history={history} />
      </AuthContext.Provider>
    );
    wrapper.find('button').prop('onClick')();
    expect(history.replace).toHaveBeenCalledWith('/');
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Adrian',
      },
    });
    localStorage.setItem('lastPath','/dc');
    wrapper.find('button').prop('onClick')();
    expect(history.replace).toHaveBeenCalledWith('/dc');
    // expect(localStorage.getItem).toHaveBeenCalledWith('lastPath');
  });
});
