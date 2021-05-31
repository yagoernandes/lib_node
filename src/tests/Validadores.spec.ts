import validaCpf from '../modules/validadores';

it('deve ser capaz de atualizar um formulario', async () => {
  const cpf = '08011691600';
  const validacao = validaCpf(cpf);

  expect(validacao).toEqual(true);
});
