import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
// import HamburgerBtn from '../modules/hamburgerBtn';
import Doms from '../modules/doms';
import App from './views/app';

// HamburgerBtn.btnSet();

Doms.displayRestaurants();

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});
