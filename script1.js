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
var posicao = 1;
var mensagem = `Bom dia!                                         ` ;
var mensagem2 = `Boa tarde!                                      ` ;
var mensagem3 = `Boa noite!                                      ` ;
if (h < 12 ) {
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
  function rola() {
    document.getElementById("txt").innerHTML = 
      mensagem2.substring(posicao,mensagem2,length);
        posicao++;
      if (posicao == mensagem2.length) {
           posicao = 1;
          }
      setTimeout("rola()", 100);
    document.querySelector('footer a').style.color = color();
    document.querySelector('body').style.background = '#151515';

  }
} else {
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
// rgb(156, 255, 67) rgb(149, 193, 190) rgb(169, 13, 14)
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' +  o(r() * s)  + ')';
  };

    var inst = document.getElementById('box')
    // var inst = document.getElementById('incone')
    // var inst = document.getElementById('footer a')
    inst.addEventListener('mouseover', entrou)
    inst.addEventListener('mouseout', saiu)

    function entrou() {
      inst.style.backgroundColor = '#3f3f3f'
    }
    function saiu() {
      inst.style.backgroundColor = ''
    }


    var porcent = document.querySelector('.porcent');
    var loading = document.querySelector('.loading');
    var count1 = 'Atualizando'
    var res = 'Atualizado!';
    var load =  setInterval(animate, 2000);
    
    function animate(){
        if(res == count1 ) {
            loading.parentElement.removeChild(loading);
            clearInterval(load);
        }
        else{
            res = count1;
            porcent.textContent = count1 + '...';
        }
    }