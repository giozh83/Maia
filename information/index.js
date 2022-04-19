let nishani=1;
document.querySelector('.profile').addEventListener('click', function(){
    
    if (nishani==0) {
        document.querySelector('.profile').style.width='70%'
        document.querySelector('.profile').style.opacity='0.5'
        nishani=nishani+1;
    } else {
       document.querySelector('.profile').style.width='120%'
       document.querySelector('.profile').style.opacity='1'
       nishani=0
    }
    
})

