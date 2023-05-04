import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'hello',
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('Katia')),
    ).toEqual({ username: 'Katia' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('321')),
    ).toEqual({ password: '321' });
  });
});
