import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen/>', () => {
  test('Debe de mostrar el componente redirect si no hay argumentos en el url', () => {
    const historyMock = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('Debe de mostrar un hero si el parámetro existe y se encuentra', () => {
    const wrapper = mount(
      /**
       * Simulamos la ruta del heroe
       */
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('Debe de regresar a la pantalla anterior con PUSH', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      /**
       * Simulamos la ruta del heroe
       */
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        {/* Cuando renderizamos el componente con una función de flecha, en los argumentos nos llega
        el callback con los props que se le pasan al componente*/}
        <Route
          path="/hero/:heroeId"
          component={(props) => {
            // console.log('Props', props);
            return <HeroScreen history={historyMock} />;
          }}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test('Debe de regresar a la pantalla anterior con goBack', () => {
    const historyMock = {
      length: 3,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      /**
       * Simulamos la ruta del heroe
       */
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        {/* Cuando renderizamos el componente con una función de flecha, en los argumentos nos llega
        el callback con los props que se le pasan al componente*/}
        <Route
          path="/hero/:heroeId"
          component={(props) => {
            // console.log('Props', props);
            return <HeroScreen history={historyMock} />;
          }}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).not.toHaveBeenCalled();
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test('Debe de llamar el redirect si el hero no existe', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      /**
       * Simulamos la ruta del heroe
       */
      <MemoryRouter initialEntries={['/hero/marvel-spider12321321']}>
        {/* Cuando renderizamos el componente con una función de flecha, en los argumentos nos llega
          el callback con los props que se le pasan al componente*/}
        <Route
          path="/hero/:heroeId"
          component={(props) => {
            // console.log('Props', props);
            return <HeroScreen history={historyMock} />;
          }}
        />
      </MemoryRouter>
    );
    expect(wrapper.text()).toBe('');
  });
});
