/*jslint browser: true, devel: true, evil: false, plusplus: true, unparam: true, sloppy: true*/
var buttonElem = document.getElementById('addElem');

buttonElem.addEventListener('click', function() {
  var list = document.getElementById('list'), // jak stawiam ',' nie musze dodawac var w nastepnej linijce
      licznik = document.getElementsByTagName('li').length,
      element = document.createElement('li');
  element.innerHTML = 'item ' + licznik;
  list.appendChild(element);
            

});

