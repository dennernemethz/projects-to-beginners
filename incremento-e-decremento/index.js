let res = window.document.querySelector('#res');
let inc = window.document.querySelector('#inc');
let dec = window.document.querySelector('#decr');



let contador = 0;



function resul() {
     res.textContent=contador
  };

  inc.addEventListener('click', function () {

    contador++
    resul()

    });
    dec.addEventListener('click', function () {

        contador--
        resul()
    
    });