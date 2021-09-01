var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if(isClose) {
        header.style.height = 'auto';
    } else header.style.height = null;
}
const menuItems = document.querySelectorAll('#nav li a');
for(const menuItem of menuItems) {
    menuItem.onclick = function (e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu)
            e.preventDefault();
        else
            header.style.height = null;
    }
}

const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalCloses = document.querySelectorAll('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function () {
        modal.classList.add('open');
    });
}
function hideBuyBtns() {
    modal.classList.remove('open');
}
for(const modalClose of modalCloses) {
    modalClose.addEventListener('click', hideBuyBtns);
}
modal.addEventListener('click', hideBuyBtns);
modalContainer.addEventListener('click', function (e) {
    e.stopPropagation();
});