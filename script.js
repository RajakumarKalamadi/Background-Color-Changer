const buttons = document.querySelectorAll('.box-color');
const bodyEle = document.querySelector('body');

buttons.forEach(function(item){
    item.addEventListener('click',function(e){
       
        if(e.target.id ==='aqua'){
            bodyEle.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'pink'){
            bodyEle.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'purple'){
            bodyEle.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'blue'){
            bodyEle.style.backgroundColor = e.target.id;
        }else{
            bodyEle.style.backgroundColor = e.target.id;
        }
    })
})

// console.log(buttons)