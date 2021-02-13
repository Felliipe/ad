function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
    
}
startTime();
var today = new Date();
var h = today.getHours();
var posicao = 0;
if (h < 12 ) {
  var mensagem = `Bom dia!          ` ;
  function rola() {
    document.getElementById("txt").innerHTML = 
      mensagem.substring(posicao,mensagem,length);
        posicao++;
      if (posicao == mensagem.length) {
           posicao = 1;
          }
      setTimeout("rola()", 100); 
      document.querySelector('footer a').style.color = color();
  }
} else if (h < 18){
  var mensagem2 = `Boa tarde!          ` ;
  function rola() {
    document.getElementById("txt").innerHTML = 
      mensagem2.substring(posicao,mensagem2,length);
        posicao++;
      if (posicao == mensagem2.length) {
           posicao = 1;
          }
      setTimeout("rola()", 100);
    document.querySelector('footer a').style.color = color();
    document.querySelector('body').style.background = '#292929';
  }
} else {
  var mensagem3 = `Boa noite!          ` ;
  function rola() {
    document.getElementById("txt").innerHTML = 
      mensagem3.substring(posicao,mensagem3,length);
        posicao++;
      if (posicao == mensagem3.length) {
           posicao = 1;
          }
        setTimeout("rola()", 100);
      document.querySelector('footer a').style.color = color();
      document.querySelector('body').style.background = 'black';
        
  }

  // document.querySelector('body').style.background = 'black'
}
function RandomTextColor() {
  document.getElementById('txt').style.color = color();  
};
function  color() {
  var o = Math.round,
    r = Math.random,
    s = 288;

    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' +  o(r() * s)  + ')';
  };

