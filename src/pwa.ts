import { state } from './state';
import { render } from './render';
import type { BeforeInstallPromptEvent } from './types';

export function initPwa(): void {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    state.deferredPrompt = e as BeforeInstallPromptEvent;
    try {
      if (!localStorage.getItem('pmp_install_dismissed')) {
        state.showInstall = true;
        render();
      }
    } catch { /* ignore */ }
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(`${import.meta.env.BASE_URL}sw.js`)
        .catch(() => { /* ignore */ });
    });
  }
}
