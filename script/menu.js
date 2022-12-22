function cliqueMenu(){

    if(inavList.style.display == 'flex'){
        inavList.style.display = 'none'
    } else{
        inavList.style.display = 'flex'
    }
}

function mudouTamanho(){

if (window.innerWidth >= 768){
    inavList.style.display = 'flex'
}

else {
    inavList.style.display = 'none'
}
}