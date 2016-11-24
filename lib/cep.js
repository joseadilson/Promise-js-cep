$(document).ready(iniciar);
function iniciar() {
  $('#botao').on('click', carregar);
  
}


function carregar(){
  Promise.resolve(null)
    .then(mostraLoading)
    .then(pegarNumero)
    .then(carregarCep)
    .then(mostraNaTela)
    .then(esconderLoading)

}

//Pegando o numero do campo do formulario
function pegarNumero(result){
  var numero = $('#fcep').val();
  return numero;
}

//Fazendo a requisição da URL para buscar o cep
function carregarCep(result){
  var p = new Promise(function(resolve, reject){
    var url = 'http://viacep.com.br/ws/'+ result +'/json';
    var r = $.get(url);

    r.done(function(data){
    resolve(data);         
    });
  });
  return p;
}

function mostraNaTela(result){
  var html1 = 'Bairro:'  + result.bairro;

  $('#bairro').html(html1);
}





//Mostra e Esconder o loading.
function mostraLoading(){
  $('#loading').show();
}

function esconderLoading(){
  $('#loading').hide();
}