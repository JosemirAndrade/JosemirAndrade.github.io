<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rifa do Adrian</title>
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"rel="stylesheet"/>
  <body>
    <header>
      <h1>Chá Rifa de Panela</h1>
    </header>
    <section>
      <div id="container-apresentacao">
        <div id="container-apresentação-imagens">
          <div class="slide">
            <div class="slideImgArea slideImgArea1 active"></div><div class="slideImgArea slideImgArea2"></div><div class="slideImgArea slideImgArea3"></div>
          </div>
        </div>
      </div>
      <div id="container">
        <div id="container-info-geral">
          <div class="info-geral">
            <div class="info-geral-tittle">Por Que?</div>
            <div class="info-geral-conteudo">
              Adrian está com uma 
              <a href="https://uromedical.com.br/hidrocele-testicular-sintomas-tratamentos/" target="_blank"> #### </a> 
              Bora lá?
            </div>
          </div>
          <div class="info-geral">
            <div class="info-geral-tittle">###</div>
            <div class="info-geral-conteudo">
              ######## 
              <a href="https://uromedical.com.br/hidrocele-testicular-sintomas-tratamentos/" target="_blank">#######</a>.
            </div>
          </div>
          <div class="info-geral">
            <div class="info-geral-tittle">Qais os prêmios?</div>
            <div class="info-geral-conteudo">
              Participe da Rifa e concorra aos prêmios.
            </div>
          </div>
        </div>
        <div id="container-info-geral">
          <div class="info-geral title-valor">
            <div class="info-geral-tittle">Valor</div>
            <div class="info-geral-conteudo">R$ <span>5</span> ,00</div>
          </div>
          <div class="info-geral tittle-sorteio">
            <div class="info-geral-tittle">Sorteio</div>
            <div class="info-geral-conteudo">Data: 07 de Agosto</div>
            <div class="info-geral-conteudo">Pelo Site: <a href="https://sorteador.com.br/" target="_blank">Sorteador.com</a></div>
            <div class="info-geral-conteudo">No Insta: <a href="https://www.instagram.com/quilion7/" target="_blank">@#####</a></div>
          </div>
          <div class="info-geral title-premio">
            <div class="info-geral-tittle">Prêmio(s)</div>
            <div class="info-geral-conteudo">1ª Ganhador(a): R$ <span>200</span> ,00</div>
            <div class="info-geral-conteudo">2ª Ganhador(a): R$ <span>100</span> ,00</div>
            <div class="info-geral-conteudo">3ª Ganhador(a): R$ <span>50</span> ,00</div>
          </div>
        </div>
        <div id="container-info-geral">
          <div class="info-geral">
            <div class="info-geral-tittle">Possibilidade</div>
            <div class="info-geral-conteudo">
              Já pensou em ganhar R$ 200,00 participando apenas com R$ 5,00?!
            </div>
          </div>
          <div class="info-geral">
            <div class="info-geral-tittle">Como Funciona?</div>
            <div class="info-geral-conteudo">
              1° Selecione seus números (mais números mais chances de ganhar).
            </div>
            <div class="info-geral-conteudo">
              2° Faça o pagamento via PIX ou presencial com o Pai
              <a href="https://www.instagram.com/quilion7/" target="_blank">Quilion</a>.
            </div>
            <div class="info-geral-conteudo">
              3° Envie o comprovante por <a href="https://api.whatsapp.com/send?phone=5588981062656" target="_blank">WhatsApp</a>.
            </div>
            <div class="info-geral-conteudo">
              4° Agora é só aguardar ser sorteado! O sorteio será feito por uma Live no Instagram 
              <a href="https://www.instagram.com/quilion7/" target="_blank">@quilion7</a> no dia 07 de Agosto.
            </div>
          </div>
        </div>
      </div>
      <div id="container-info-number-geral">
        <div id="container-info-number">
          <div id="info-number-tittle">Números</div>
          <div id="info-number-qnt">
            <div class="number-qnt ntodos">Todos<span class="qnumber"></span></div>
            <div class="number-qnt ndisponiveis">Disponíveis<span class="qnumber"></span></div>
            <div class="number-qnt nreservados">Reservados<span class="qnumber"></span></div>
            <div class="number-qnt npagos">Pagos<span class="qnumber"></span></div>
          </div>
        </div>
        <div id="container-numbers"></div>
      </div>
      <div id="container-bilhete">
        <div id="mostrar-bilhete">
          <div id="number-bilhete">Bilhete: 0001</div>
          <div id="situacao">Status: Pago</div>
          <div id="participante">Participante: Quilion Oliveira</div>
          <div id="telefone">Celular: (88) 88888-8888</div>
          <button id="button-ok" onclick="ok()">OK</button>
        </div>
      </div>
      <div id="mostrar-carinho">
        <div id="quanto-custa">Total: R$ 10,00</div>
        <div id="prosseguir" onclick="prosseguir()">Prosseguir</div>
      </div>
      <div id="container-prosseguir">
        <div id="prosseguir-PIX">
          <div class="containerPagamento">
            <div class="titleBanco picpay">PicPay</div>
            <div class="imgPagamento"><img src="./assets/images/pixpicpay.jpeg" alt=""></div>
            <div class="buttonsPagamento picpay">
              <div class="copiarCodigoPagamento picpayButton">88981062656</div>
              <div class="enviarComprovantePagamento picpayButton">ENVIAR COMPROVANTE</div>
            </div>
          </div>
          <div class="containerPagamento">
            <div class="titleBanco c6bank">C6 Bank</div>
            <div class="imgPagamento"><img src="./assets/images/pixc6.jpeg" alt=""></div>
            <div class="buttonsPagamento c6bank">
              <div class="copiarCodigoPagamento c6bankButton">quilbrub@gmail.com</div>
              <div class="enviarComprovantePagamento c6bankButton">ENVIAR COMPROVANTE</div>
            </div>
          </div>
          <div id="buttonVoltarReserva" onclick="voltarReserva()">Voltar</div>
        </div>
        <div id="prosseguir-compra">
          <div id="prosseguir-tittle">
            <p>Reserva de número(s)</p>
            <button id="button-X" onclick="x()">X</button>
          </div>
          <div id="info-compra">
            <div id="valor-pagar">Valor a pagar: <span> R$ 10,00</span></div>
            
          </div>
          <div id="dados-cliente">
            <span>Por favor, preencha os campos abaixo:</span>
            <legend>Nome Completo:</legend>
            <div class="dados">
              <img src="./assets/images/icouser.svg" alt="">
              <input type="text" name="nome" id="nome" pattern="[a-z\s]+$" placeholder="Insira seu nome completo"> 
            </div>
            <legend id="legendCelular">Celular:</legend>
            <div class="dados">
              <img src="./assets/images/icophone.svg" alt="">
              <input type="text" name="celular" id="celular" placeholder="Insira seu whatsapp com DDD" maxlength="15" onkeyup="mascaraCelular()">
            </div>
            <span id="tittle">Números selecionados:</span>
            <div id="num-selecionados">
              
            </div>
            <span>Declaro ter lido e concordado com o <a href="" target="_blank">regulamento</a>.</span>
            <div id="compra-buttons">
              <div id="cancelar" onclick="x()">Cancelar</div>
              <div id="reservar" onclick="reservar()">Reservar</div>
              <div id="mostrarPIX" onclick="mostrarPIX()">Pagar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div id="ref">
        <p>#######</p>
        <a href="">#########</a>
      </div>
      <div id="banner--logos--footer">
        <a href="https://github.com/QuiLion7?tab=repositories" target="_blank">
          <img src="./assets/images/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/quilion-oliveira-18820b31/"
          target="_blank"
        >
          <img src="./assets/images/linkedin.png" />
        </a>
        <a href="mailto:quilbrub@gmail.com" target="_blank">
          <img src="./assets/images/gmail.png" />
        </a>
        <a href="https://www.instagram.com/quilion7/" target="_blank">
          <img src="./assets/images/instagram.png" />
        </a>
        <a href="https://www.facebook.com/QuiLion/" target="_blank">
          <img src="./assets/images/facebook.png" />
        </a>
      </div>
    </footer>
    <script src="./assets/js/cadastroNumeros.js"></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>
