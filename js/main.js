(function ($) {
"use strict";
// Spinner
var spinner = function () {
setTimeout(function () {
if ($('#spinner').length > 0) {
$('#spinner').removeClass('show');
}
}, 1);
};
spinner(0);
// Initiate the wowjs
new WOW().init();
// Sticky Navbar
$(window).scroll(function () {
if ($(this).scrollTop() > 45) {
$('.nav-bar').addClass('sticky-top shadow-sm');
} else {
$('.nav-bar').removeClass('sticky-top shadow-sm');
}
});
// Hero Header carousel
$(".header-carousel").owlCarousel({
items: 1,
autoplay: true,
smartSpeed: 2000,
center: false,
dots: false,
loop: true,
margin: 0,
nav : true,
navText : [
'<i class="bi bi-arrow-left"></i>',
'<i class="bi bi-arrow-right"></i>'
]
});
// ProductList carousel
$(".productList-carousel").owlCarousel({
autoplay: true,
smartSpeed: 2000,
dots: false,
loop: true,
margin: 25,
nav : true,
navText : [
'<i class="fas fa-chevron-left"></i>',
'<i class="fas fa-chevron-right"></i>'
],
responsiveClass: true,
responsive: {
0:{
items:1
},
576:{
items:1
},
768:{
items:2
},
992:{
items:2
},
1200:{
items:3
}
}
});
// ProductList categories carousel
$(".productImg-carousel").owlCarousel({
autoplay: true,
smartSpeed: 1500,
dots: false,
loop: true,
items: 1,
margin: 25,
nav : true,
navText : [
'<i class="bi bi-arrow-left"></i>',
'<i class="bi bi-arrow-right"></i>'
]
});
// Single Products carousel
$(".single-carousel").owlCarousel({
autoplay: true,
smartSpeed: 1500,
dots: true,
dotsData: true,
loop: true,
items: 1,
nav : true,
navText : [
'<i class="bi bi-arrow-left"></i>',
'<i class="bi bi-arrow-right"></i>'
]
});
// ProductList carousel
$(".related-carousel").owlCarousel({
autoplay: true,
smartSpeed: 1500,
dots: false,
loop: true,
margin: 25,
nav : true,
navText : [
'<i class="fas fa-chevron-left"></i>',
'<i class="fas fa-chevron-right"></i>'
],
responsiveClass: true,
responsive: {
0:{
items:1
},
576:{
items:1
},
768:{
items:2
},
992:{
items:3
},
1200:{
items:4
}
}
});
// Product Quantity
$('.quantity button').on('click', function () {
var button = $(this);
var oldValue = button.parent().parent().find('input').val();
if (button.hasClass('btn-plus')) {
var newVal = parseFloat(oldValue) + 1;
} else {
if (oldValue > 0) {
var newVal = parseFloat(oldValue) - 1;
} else {
newVal = 0;
}
}
button.parent().parent().find('input').val(newVal);
});
const backToTop = document.querySelector('.back-to-top');
// Show / hide button on scroll
window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
backToTop.classList.add('show');
} else {
backToTop.classList.remove('show');
}
});
// Scroll to top on click
backToTop.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
})(jQuery);
function changeLanguage(lang) {
const translations = {
en: {
langName: "English",
title: "Welcome to our website",
para: "We provide eco-friendly paper products."
},
tr: {
langName: "Turkish",
title: "Web sitemize hoş geldiniz",
para: "Çevre dostu kağıt ürünler sunuyoruz."
},
es: {
langName: "Spanish",
title: "Bienvenido a nuestro sitio web",
para: "Ofrecemos productos de papel ecológicos."
},
it: {
langName: "Italian",
title: "Benvenuto nel nostro sito web",
para: "Forniamo prodotti di carta ecologici."
}
};
document.getElementById("langToggle").innerHTML =
`<small>${translations[lang].langName}</small>`;
document.getElementById("titleText").innerText =
translations[lang].title;
document.getElementById("paraText").innerText =
translations[lang].para;
}