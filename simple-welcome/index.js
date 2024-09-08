let res = window.document.querySelector('#res')

let nam = prompt('enter your name or complete name')
let time = new Date();


let hours = time.getHours();
document.writeln('<br>')
document.writeln('<br>')
if(hours <=12){
   res.innerHTML=('Welcome  ' + nam.toLocaleUpperCase() + '  Has a good morning !!!!')
}else if (hours <=18){
  res.innerHTML=('Welcome  ' + nam.toLocaleUpperCase() + '  Has a good afternoon !!!!  ')
}else{
    res.innerHTML=('Welcome  ' + nam.toLocaleUpperCase() + '  Has a good evening !!!!  ')
}
res.innerHTML('<br/>')