let colors = window.document.querySelector('#colors')
let btn = window.document.querySelector('#btn')
let bg = window.document.querySelector('.bg')


btn.addEventListener('click', function(){

    let cores = ['blue','red','yellow','green','purple','cyan']


    let arr = cores [Math.floor(Math.random()* cores.length)]


    document.body.style.backgroundColor = arr

/*
if(arr == 'blue'){
    colors.innerHTML = ' blue'
}else if (arr == 'red'){
    colors.innerHTML = ' red'
}else if (arr == 'yellow'){
    colors.innerHTML = 'yellow'
}else if (arr == 'green'){ 
    colors.innerHTML = ' green'
}*/ 
});