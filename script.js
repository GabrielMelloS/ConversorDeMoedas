function converterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorDolarHoje = 0.1905;
  var valorConvertidoEmDolar = valorEmRealNumerico * valorDolarHoje;
  var valorConvertidoFixado = valorConvertidoEmDolar.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor convertido: US$" + valorConvertidoFixado;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEuroHoje = 0.1926;
  var valorConvertidoEmEuro = valorEmRealNumerico * valorEuroHoje;
  var valorConvertidoFixado = valorConvertidoEmEuro.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor convertido: €" + valorConvertidoFixado;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorLibraHoje = 0.1664;
  var valorConvertidoEmLibra = valorEmRealNumerico * valorLibraHoje;
  var valorConvertidoFixado = valorConvertidoEmLibra.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor convertido: £" + valorConvertidoFixado;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterIene() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorIeneHoje = 27.4238;
  var valorConvertidoEmIene = valorEmRealNumerico * valorIeneHoje;
  var valorConvertidoFixado = valorConvertidoEmIene.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor convertido: ¥" + valorConvertidoFixado;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterFranco() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorFrancoHoje = 0.1879;
  var valorConvertidoEmFranco = valorEmRealNumerico * valorFrancoHoje;
  var valorConvertidoFixado = valorConvertidoEmFranco.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor convertido: CHF" + valorConvertidoFixado;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorBitcoinHoje = 0.00001;
  var valorConvertidoEmBitcoin = valorEmRealNumerico * valorBitcoinHoje;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor convertido: ₿" + valorConvertidoEmBitcoin;

  elementoValorConvertido.innerHTML = valorConvertido;
}