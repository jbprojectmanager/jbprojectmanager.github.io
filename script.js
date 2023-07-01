// JavaScript para controlar el deslizamiento automático de la galería
var slideIndex = 0;

var popupCAD = document.getElementById('popup-CAD');
var popupBIM = document.getElementById('popup-BIM');
var popupRVT = document.getElementById('popup-RVT');
var popupSKT = document.getElementById('popup-SKT');
var popupREND = document.getElementById('popup-REND');
var popupCAP = document.getElementById('popup-CAP');

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const boton5 = document.getElementById('boton5');
const boton6 = document.getElementById('boton6');

const btnCerrar1 = document.getElementById('btn-Cerrar1');
const btnCerrar2 = document.getElementById('btn-Cerrar2');
const btnCerrar3 = document.getElementById('btn-Cerrar3');
const btnCerrar4 = document.getElementById('btn-Cerrar4');
const btnCerrar5 = document.getElementById('btn-Cerrar5');
const btnCerrar6 = document.getElementById('btn-Cerrar6');

showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3500); // Cambiar imagen cada 3 segundos (3000 milisegundos)
}

boton1.addEventListener('click', function() {
  popupCAD.style.display = 'flex';
});
boton2.addEventListener('click', function() {
  popupBIM.style.display = 'flex';
});
boton3.addEventListener('click', function() {
  popupRVT.style.display = 'flex';
});
boton4.addEventListener('click', function() {
  popupSKT.style.display = 'flex';
});
boton5.addEventListener('click', function() {
  popupREND.style.display = 'flex';
});
boton6.addEventListener('click', function() {
  popupCAP.style.display = 'flex';
});

btnCerrar1.addEventListener('click', function() {
  popupCAD.style.display = 'none';
});

btnCerrar2.addEventListener('click', function() {
  popupBIM.style.display = 'none';
});

btnCerrar3.addEventListener('click', function() {
  popupRVT.style.display = 'none';
});

btnCerrar4.addEventListener('click', function() {
  popupSKT.style.display = 'none';
});

btnCerrar5.addEventListener('click', function() {
  popupREND.style.display = 'none';
});

btnCerrar6.addEventListener('click', function() {
  popupCAP.style.display = 'none';
});



function abrirPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = 'block';
}

function cerrarPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = 'none';
}



