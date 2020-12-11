const HamburgerBtn = (() => {
  const _hamburgerBtn = document.querySelector('#hamburger');
  const _drawer = document.querySelector('#drawer');

  const btnSet = () => {
    _hamburgerBtn.addEventListener('click', (e) => {
      _drawer.classList.toggle('open');
      e.stopPropagation();
    });
  };

  return { btnSet };
})();

export default HamburgerBtn;
