import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import HamburgerBtn from './hamburgerBtn';
import Doms from './doms';

HamburgerBtn.btnSet();

Doms.displayRestaurants();
