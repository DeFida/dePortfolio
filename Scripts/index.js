let last_known_scroll_position = 0;
let ticking = false;

const navbar = document.querySelector('.navbar');

function doSomething(scroll_pos) {
  // Делаем что-нибудь с позицией скролла
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position > 50) {
        navbar.classList.add('navbar_linear-gradiend');
    }
    else {
        navbar.classList.remove('navbar_linear-gradiend');
    }
});