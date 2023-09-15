document.addEventListener('DOMContentLoaded', function () {
  const resultado = document.querySelector('#resultado');
  const altura = document.querySelector('#altura');
  const peso = document.querySelector('#peso');
  const calcularBtn = document.querySelector('#calcularBtn');
  const limparBtn = document.querySelector('#limparBtn');
  const erro = document.querySelector('#erro');

  const calcIMC = () => {
      if (altura.value !== '' && peso.value !== '') {
          const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
          let classification = '';

          if (imc < 18.5) {
              classification = 'Abaixo do peso';
          } else if (imc < 25) {
              classification = 'Peso normal';
          } else if (imc < 30) {
              classification = 'Acima do peso';
          } else if (imc < 35) {
              classification = 'Obesidade Grau I';
          } else if (imc < 41) {
              classification = 'Obesidade Grau II';
          } else {
              classification = 'Obesidade Grau III';
          }

          resultado.innerHTML = `IMC: ${imc} (${classification})`;
          erro.innerHTML = ''; // Limpa mensagens de erro
      } else {
          resultado.innerHTML = '';
          erro.innerHTML = 'Preencha os campos corretamente';
      }
  };

  calcularBtn.addEventListener('click', calcIMC);

  limparBtn.addEventListener('click', function () {
      resultado.innerHTML = '';
      altura.value = '';
      peso.value = '';
      erro.innerHTML = ''; // Limpa mensagens de erro
  });
});






