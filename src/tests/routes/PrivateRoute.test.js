import React from 'react';
import {  mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  };
  test('Debe de mostrar el componente si está autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );
    // console.log(wrapper.html());
    expect(wrapper.find('span').exists()).toBe(true);
  });
});