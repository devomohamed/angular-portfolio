let burgerMenuBtn = document.querySelector('label.toggle');
let menuHeader = document.querySelector('#header-menu');
burgerMenuBtn.addEventListener('click',()=>{
    menuHeader.classList.toggle('active')
})

// Loader 
let loader = document.querySelector('.loader-overlay')
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        setTimeout(() => {
            loader.remove()
        }, 1);
    }
};