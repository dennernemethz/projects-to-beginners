let res = window.document.querySelector('#resul')

setInterval(function(){
    let date = new Date()
    res.innerHTML= date.toLocaleTimeString()
},1000)
