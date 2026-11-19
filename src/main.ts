import './styles.css';
import { exposeActions, initNavigation } from './actions';
import { initPwa } from './pwa';
import { initQuest } from './quest/ui';

exposeActions();
initQuest();
initPwa();
initNavigation();
