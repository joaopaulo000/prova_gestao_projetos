function init(){
    const button = document.querySelector('button');
    let obj={
        x:undefined,
        y:undefined,
    }
    button.addEventListener('mouseover',()=>{
        button.style.top=`${obj.x=generateNum()}%`;
        button.style.left=`${obj.y=generateNum()}%`;
    });

    button.addEventListener('click',()=>{
        alert('clicou no botão');
    });
}
init();


function generateNum(){
    let num = Math.floor(Math.random()*100);
    return num;
}
