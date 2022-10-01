let containerNumbers = document.querySelector('#container-numbers');
let buttons = document.querySelectorAll('.button');
let mostrarBilhete = document.querySelector('#container-bilhete');
let mostrarCarrinho = document.querySelector('#mostrar-carinho');
let mostrarTelefone = document.querySelector('#telefone');
let mostrarProsseguir = document.querySelector('#container-prosseguir');
let numSelecionados = document.querySelector('#num-selecionados');
let ntodos = document.querySelector('.ntodos .qnumber');
let ndisponiveis = document.querySelector('.ndisponiveis .qnumber');
//let nreservados = document.querySelector('.nreservados .qnumber');
//let npagos = document.querySelector('.npagos .qnumber');
//let valorPagar = document.querySelector('#valor-pagar span');
let inputNome = document.querySelector('#nome');
let inputCelular = document.querySelector('#celular');
let legendCelular = document.querySelector('#legendCelular');
let mostrandoCompra = document.querySelector('#prosseguir-compra');
//let mostrandoPIX = document.querySelector('#prosseguir-PIX');
let urlZap = 'https://api.whatsapp.com/send?phone=5588998301499&text=';

//let valorNumero = 5;
let carrinho = [];

//Slide de Fotos
let qntImagens = document.querySelectorAll('.slideImgArea');
let pointers = document.querySelectorAll('.pointer');
let slideImgArea1 = document.querySelector('.slideImgArea1');
let slideImgArea2 = document.querySelector('.slideImgArea2');
let slideImgArea3 = document.querySelector('.slideImgArea3');


function nextImage() {
	if(qntImagens[0].classList.contains('active')) {
    slideImgArea1.style.width = '100%';
    slideImgArea2.style.width = '0';
    slideImgArea3.style.width = '0';
    qntImagens[1].classList.add('active');
    qntImagens[0].classList.remove('active');
	}else if(qntImagens[1].classList.contains('active')) {
		slideImgArea1.style.width = '0';
    slideImgArea2.style.width = '100%';
    slideImgArea3.style.width = '0';
    qntImagens[2].classList.add('active');
    qntImagens[1].classList.remove('active');
	}else if(qntImagens[2].classList.contains('active')) {
    slideImgArea1.style.width = '0';
    slideImgArea2.style.width = '0';
    slideImgArea3.style.width = '100%';
    qntImagens[0].classList.add('active');
    qntImagens[2].classList.remove('active');
	}
}

setInterval(nextImage, 5000);

criarNumeros()

function criarNumeros() {
  cadastroNumeros.filter(item => {
    if(item.numero !== '') {
      if(item.situacao === 'Pago') {
        containerNumbers.innerHTML += `<button class="button pago" id="${item.numero}" onclick="clicou('${item.numero}')">${item.numero}</button>`;
      }else if(item.situacao === 'Reservado') {
        containerNumbers.innerHTML += `<button class="button reservado" id="${item.numero}" onclick="clicou('${item.numero}')">${item.numero}</button>`;
      }else {
        containerNumbers.innerHTML += `<button class="button" id="${item.numero}" onclick="clicou('${item.numero}')">${item.numero}</button>`;
      }
    }
    
  });
  ntodos.innerHTML = cadastroNumeros.length;

  let numerosDisponiveis = cadastroNumeros.filter(item => item.situacao === 'Disponível').length;
  ndisponiveis.innerHTML = numerosDisponiveis;

 // let numerosReservados = cadastroNumeros.filter(item => item.situacao === 'Reservado').length;
 //nreservados.innerHTML = numerosReservados;

  let numerosPagos = cadastroNumeros.filter(item => item.situacao === 'Pago').length;
  npagos.innerHTML = numerosPagos;
}

function clicou(n) {
  let mostrarNumero = document.querySelector('#number-bilhete');
  let mostrarSituacao = document.querySelector('#situacao');
  let mostrarParticipante = document.querySelector('#participante');

  carrinho.sort((a,b) => a- b);

  cadastroNumeros.filter(item => {
    if(n === item.numero && (item.situacao === 'Reservado' || item.situacao === 'Pago')) {
      mostrarBilhete.style.display = 'flex';
      mostrarNumero.innerHTML = `Bilhete: ${item.numero}`;
      mostrarSituacao.innerHTML = `Status: ${item.situacao}`;
      mostrarParticipante.innerHTML = `Participante: ${item.participante}`;
      mostrarTelefone.innerHTML = `Celular: ${item.telefone}`;
    }else if(n === item.numero && item.situacao === 'Disponível'){
      let numberId = document.getElementById(`${item.numero}`);
      numberId.classList.toggle('clicado');
      if(numberId.classList.contains('clicado')) {
        carrinho.push(item.numero);
        numSelecionados.innerHTML += `<div id="sel${item.numero}"class="selecionado" contagem="${item.numero}"><span>${item.numero}</span></div>`;
      }else {
        carrinho.splice(carrinho.indexOf(item.numero), 1);
        numSelecionados.removeChild(document.getElementById(`sel${item.numero}`));
      }
    }
    addCarrinho();
  })
}

function addCarrinho() {
  if(carrinho.length > 0) {
    mostrarCarrinho.style.display = 'flex';
  }else {
    mostrarCarrinho.style.display = 'none';
  }
 // let quantoCusta = document.querySelector('#quanto-custa');
  //quantoCusta.innerHTML = `Total: R$ ${carrinho.length * valorNumero},00`;
  
}

function prosseguir() {
  mostrarCarrinho.style.display = 'none';
  mostrarProsseguir.style.display = 'flex';
  reservando();
}

function reservando() {
 // valorPagar.innerHTML = `R$ ${carrinho.length * valorNumero},00`;
}

function ok(){
  mostrarBilhete.style.display = 'none';
}

function x() {
  mostrarProsseguir.style.display = 'none';
  if(carrinho.length > 0) {
    mostrarCarrinho.style.display = 'flex';
  }
  inputNome.placeholder = 'Insira seu nome completo ';
  inputCelular.placeholder = 'Insira seu celular com DDD';
  legendCelular.innerHTML = 'Celular:';
  legendCelular.style.color = '#FDF5E6'; //FUNDO AVISOS
}

function mascaraCelular() {
  let celular = document.querySelector('#celular');
  if(celular.value.length == 1) {
    celular.value = '(' + celular.value;
  }else if(celular.value.length == 3) {
    celular.value += ')' + ' ';
  }else if(celular.value.length == 10) {
    celular.value += '-'
  }
}

function reservar() {
  if(inputNome.value === ''|| inputCelular.value === '') {
    inputNome.placeholder = 'OBRIGATÓRIO ';
    inputCelular.placeholder = 'OBRIGATÓRIO ';
  }else if(inputCelular.value.length < 15) {
    legendCelular.innerHTML = 'INCOMPLETO:';
    legendCelular.style.color = '#FF0000';
  }else {
    let msg = `Nome: ${inputNome.value};%0ACelular: ${inputCelular.value};%0AQnt: ${carrinho.length};%0ANúmero(s): ${carrinho}.`;
    let msgEditada = msg.replace(/ /g, '%20');
    //let msg = `Nome: ${inputNome.value};%0ACelular: ${inputCelular.value};%0AQnt: ${carrinho.length};//%0AValor: R$ ${carrinho.length * valorNumero},00;%0ANúmero(s): ${carrinho}.`;
    //let msgEditada = msg.replace(/ /g, '%20');

    window.open(`${urlZap}${msgEditada}`, '_blank');
    legendCelular.innerHTML = 'Celular:';
    legendCelular.style.color = '#FFFFFF';
  }


function voltarReserva() {
  mostrandoCompra.style.display = 'flex';
  mostrandoPIX.style.display = 'none';
  btnCopiarPicpay.innerHTML = '88981062656';
  btnCopiarPicpay.style.color = '#FFFFFF';
  btnCopiarC6bank.innerHTML = 'quilbrub@gmail.com';
  btnCopiarC6bank.style.color = '#FFFFFF';
}
};
