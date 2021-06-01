import verificaCpfValido from '../modules/index';

it('Desve ser capaz de validar se um cpf é válido', async () => {
  const cpf = '08011691600';
  const validacao = verificaCpfValido(cpf);

  expect(validacao).toEqual(true);
});

it('Desve ser capaz de validar se um cpf com caracter especiais', async () => {
  const cpf = '080.116.916-00';
  const validacao = verificaCpfValido(cpf);

  expect(validacao).toEqual(true);
});
