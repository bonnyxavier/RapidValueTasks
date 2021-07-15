function toggleHamburger(){
    var navbar = document.querySelector('.navContainer')
    if(navbar.className === "navContainer"){
        navbar.className += " clicked"
    }
    else{
        navbar.className  = "navContainer"
    }
    
}


// function toggleHamburger(){
//     var navbar = document.querySelector('.navContainer')
//     if(window.innerWidth <= 1000){
//         navbar.classList.add('clickedTopNav')
//     }
//     else{
//         navbar.classList.remove('clickedTopNav')
//     }
    
// }