let nishani=0;
document.querySelector('.picture').addEventListener('click', function(){
    
    if (nishani==0) {
        document.querySelector('.picture').style.width='30vh'
        document.querySelector('.picture').style.opacity='0.5'
        nishani=nishani+1;
    } else {
       document.querySelector('.picture').style.width='60vh'
       document.querySelector('.picture').style.opacity='1'
       nishani=0
    }
    
})

