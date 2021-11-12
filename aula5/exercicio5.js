function validaMaiorIdade(anoNascimento) {
  const eMaiordeIdade = new Date().getFullYear() - anoNascimento;
  if (eMaiordeIdade > 18) {
    return "Liberação autorizada";
  } else if (eMaiordeIdade === 18) {
    return "Validar documento de identidade";
  } else {
    return "ATENÇÃO: Liberação NÃO autorizada";
  }
}
const resultado = validaMaiorIdade(2000);

console.log(resultado);
