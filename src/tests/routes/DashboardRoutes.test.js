import React from 'react';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <DashboardRoutes />', () => {
  test('Debe de mostrarse correctamente ', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: 'Adrian',
        logged: true,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Adrian');
  });
});
