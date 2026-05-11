import './styles.css';
import { render } from './render';
import { exposeActions } from './actions';
import { initPwa } from './pwa';

exposeActions();
initPwa();
render();
