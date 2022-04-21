let nishani=1;
document.querySelector('.picture1_child1').addEventListener('click', function(){
    
    if (nishani==0) {
        document.querySelector('.picture1_child1').style.width='100%'
        document.querySelector('.picture1_child1').style.opacity='0.5'
        nishani=nishani+1;
    } else {
       document.querySelector('.picture1_child1').style.width='200%'
       document.querySelector('.picture1_child1').style.opacity='1'
       nishani=0
    }
    
})

