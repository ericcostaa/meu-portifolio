function cliqueMenu(e){

 let lista = document.querySelector('ul');

 e.name === 'menu' ? (e.name = "close",lista.classList.add('top-[80px]'), lista.classList.add('opacity-100')) :( e.name = "menu" ,lista.classList.remove('top-[80px]'),lista.classList.remove('opacity-100'))

}