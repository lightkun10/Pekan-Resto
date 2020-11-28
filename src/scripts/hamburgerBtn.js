const HamburgerBtn = (function() {
    // console.log("Hello from hamburger button!");
    const _hamburgerBtn = document.querySelector("#hamburger");
    const _drawer = document.querySelector("#drawer");

    let btnSet = () => {
        _hamburgerBtn.addEventListener("click", e => {
            _drawer.classList.toggle("open");
            e.stopPropagation();
        });
    }

    return { btnSet }
})();

export { HamburgerBtn }