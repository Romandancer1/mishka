(function() {
  var menuToggle = document.querySelector('.navigation__menu-dropdown');
  var menu = document.querySelector('.navigation__list');
  var humburger = menuToggle.querySelector('.humburger');

  menuToggle.addEventListener('click', function() {
    if (!menu.classList.contains('navigation__list--show')) {
      menu.classList.add('navigation__list--show');
      humburger.classList.add('humburger--hide');
      humburger.classList.remove('humburger--show');
    } else {
      menu.classList.remove('navigation__list--show');
      humburger.classList.remove('humburger--hide');
      humburger.classList.add('humburger--show');
    }
  });
})();
