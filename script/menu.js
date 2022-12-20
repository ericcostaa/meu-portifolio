function cliqueMenu(){

    if(inavList.style.display == 'block'){
        inavList.style.display = 'none'
    } else{
        inavList.style.display = 'block'
    }
}

function mudouTamanho(){

if (window.innerWidth >= 768){
    inavList.style.display = 'block'
}

else {
    inavList.style.display = 'none'
}
}