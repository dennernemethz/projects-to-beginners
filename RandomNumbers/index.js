let res = window.document.querySelector('#res')
let btn = window.document.querySelector('#btn')

let arr = [0,1,2,3,4,5,6,7,8,9,10]

btn.addEventListener('click', function(){
    let col = arr[Math.floor(Math.random()*10)]
    res.innerHTML=col
})