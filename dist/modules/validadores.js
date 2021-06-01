Object.defineProperty(exports, '__esModule', { value: true });
function verificaCpfValido(cpf) {
  if (cpf == null) {
    return false;
  }
  const cpfLimpo = cpf.replace(/[^\w\s]/gi, '');
  if ((cpfLimpo === '00000000000') || (cpfLimpo === '11111111111')
        || (cpfLimpo === '22222222222') || (cpfLimpo === '33333333333')
        || (cpfLimpo === '44444444444') || (cpfLimpo === '55555555555')
        || (cpfLimpo === '66666666666') || (cpfLimpo === '77777777777')
        || (cpfLimpo === '88888888888') || (cpfLimpo === '99999999999')) {
    return false;
  }
  let numero = 0;
  let caracter = '';
  const numeros = '0123456789';
  let j = 10;
  let somatorio = 0;
  let resto = 0;
  let digito1 = 0;
  let digito2 = 0;
  let cpfAux = '';
  cpfAux = cpfLimpo.substring(0, 9);
  for (let i = 0; i < 9; i += 1) {
    caracter = cpfAux.charAt(i);
    if (numeros.search(caracter) === -1) {
      return false;
    }
    numero = Number(caracter);
    somatorio += (numero * j);
    j -= 1;
  }
  resto = somatorio % 11;
  digito1 = 11 - resto;
  if (digito1 > 9) {
    digito1 = 0;
  }
  j = 11;
  somatorio = 0;
  cpfAux += digito1;
  for (let i = 0; i < 10; i += 1) {
    caracter = cpfAux.charAt(i);
    numero = Number(caracter);
    somatorio += (numero * j);
    j -= 1;
  }
  resto = somatorio % 11;
  digito2 = 11 - resto;
  if (digito2 > 9) {
    digito2 = 0;
  }
  cpfAux += digito2;
  if (cpfLimpo !== cpfAux) {
    return false;
  }
  return true;
}
exports.default = verificaCpfValido;
