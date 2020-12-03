import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import HamburgerBtn from '../modules/hamburgerBtn';
import Doms from '../modules/doms';

HamburgerBtn.btnSet();

Doms.displayRestaurants();
