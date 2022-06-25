function Calculator() { // Função Construtora
  this.display = document.querySelector('.display');

  this.start = () => { // Método start que captura o click e a tecla enter
    this.captClick();
    this.captEnter();
  }

  this.captEnter = () => { // Captura a tecla enter
    this.display.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.doMath(); // Realiza a conta
      }
    });
  }

  this.captClick = () => { // Captura o botão clicado
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addToDisplay(el); // Adiciona ao display
      if (el.classList.contains('btn-clear')) this.clear(); // Limpa o display
      if (el.classList.contains('btn-del')) this.del(); // Limpa um elemento do display
      if (el.classList.contains('btn-eq')) this.doMath(el); // Faz a conta
    });
  }

  this.doMath = () => {
    try {
      const math = eval(this.display.value); // Realiza a conta com eval

      if (!math) { // Apenas se a conta for válida (não for false, NaN)
        alert('Conta Inválida');
        return;
      }
      this.display.value = math;
    } catch (e) {
      alert('Conta Inválida');
      return;
    }
  }

  this.addToDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus(); // Previne comportamento indesejado no código com o uso da tecla enter
  }

  this.clear = () => this.display.value = ''; 
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calc = new Calculator();
calc.start();