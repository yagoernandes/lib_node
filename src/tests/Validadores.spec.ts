import { validaCpf } from '../modules/index';

it('deve ser capaz de atualizar um formulario', async () => {
  const cpf = '08011691600';
  const validacao = validaCpf(cpf);

  expect(validacao).toEqual(true);
});

it('should throw Error with message \'UNKNOWN ERROR2\' when no parameters were passed', () => {
  try {
    expect(true).toEqual(true);

    throw Error('UNKNOWN ERROR2');
  } catch (e) {
    expect(e.message).toBe('UNKNOWN ERROR');
  }
});
