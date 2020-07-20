import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';
describe('Pruebas en el componente <AppRouter/>', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  test('Debe de mostrar el login si no está autenticado ', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    console.log(wrapper.html());

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el componente marvel si está autenticado', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: 'Adrian',
        logged: true,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        
          <AppRouter />
        
      </AuthContext.Provider>
    );
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
