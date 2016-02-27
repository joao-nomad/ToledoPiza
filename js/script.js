var colorOut = "";
var counter = $(".pointBall").length;

if (counter > 8){colorOut = '#337ab7';}
if (counter == 8){colorOut = '#D42A2A';}
if (counter == 6){colorOut = '#D0B400';}
if (counter == 5){colorOut = '#3F9BDC';}

$("#psicodiagnostico").click(function() {
  window.location.href = 'services/psicodiagnostico.html';
});

$("#psicodiagnostico").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#psicodiagnostico").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);   
});

/* ----------------------------------------------- */

$("#vocacional").click(function() {
  window.location.href = 'services/vocacional.html';
});

$("#vocacional").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#vocacional").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#neuroPsico").click(function() {
  window.location.href = 'services/neuroPsico.html';
});

$("#neuroPsico").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#neuroPsico").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#psicoMotora").click(function() {
  window.location.href = 'services/psicoMotora.html';
});

$("#psicoMotora").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#psicoMotora").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#paisebebes").click(function() {
  window.location.href = 'services/clinicaPaisBebes.html';
});

$("#paisebebes").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#paisebebes").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#psicoPedagogica").click(function() {
  window.location.href = 'services/psicoPedagogica.html';
});

$("#psicoPedagogica").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#psicoPedagogica").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#orientacaoPais").click(function() {
  window.location.href = 'services/orientacaoPais.html';
});

$("#orientacaoPais").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#orientacaoPais").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#orientacaoFilhos").click(function() {
  window.location.href = 'services/orientacaoPaisFilhos.html';
});

$("#orientacaoFilhos").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#orientacaoFilhos").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#autista").click(function() {
  window.location.href = 'services/autista.html';
});

$("#autista").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#autista").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#atrasoDesenvolvimento").click(function() {
  window.location.href = 'services/atrasoDesenvolvimento.html';
});

$("#atrasoDesenvolvimento").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#atrasoDesenvolvimento").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#psicoterapia").click(function() {
  window.location.href = 'services/psicoterapia.html';
});

$("#psicoterapia").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#psicoterapia").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */

$("#terapiaCasal").click(function() {
  window.location.href = 'services/terapiaCasal.html';
});

$("#terapiaCasal").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#terapiaCasal").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', colorOut);
});

/* ----------------------------------------------- */