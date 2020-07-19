import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = authReducer({ name: 'adrian', logged: false }, {});
    expect(state).toEqual(state);
  });
  test('Debe de autenticar y colocar el name del usuario', () => {
    const { name, logged } = authReducer(
      {},
      { type: types.login, payload: { name: 'adrian', logged: false } }
    );
    expect(name).toBe('adrian');
    expect(logged).toBe(true);
  });
  test('Debe de borrar el name del usuario y logged en false', () => {
    const { name, logged } = authReducer(
      {},
      { type: types.logout, payload: { name: 'adrian', logged: false } }
    );
    expect(name).toBe(undefined);
    expect(logged).toBe(false);
  });
});
