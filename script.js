function menuLateral(){
    let menu = document.getElementById('menu');

    if(menu.style.right == "-100%"){
        menu.style.right = "0";
      } else{
        menu.style.right = "-100%";//Esconder
      }
}