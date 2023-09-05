import { StarRezRestConfig } from '@src/lib/starrez-rest/StarRezRestConfig';
import browser from 'webextension-polyfill';
import $ from 'jquery';
import { STARREZ_AUTH_TOKEN_STORAGE_KEY } from '@src/lib/constants';
import { waitFor } from '@src/lib/waitPromise';

export async function getToken(config: StarRezRestConfig) {
  const result = await browser.storage.local.get(STARREZ_AUTH_TOKEN_STORAGE_KEY);
  let token = result[STARREZ_AUTH_TOKEN_STORAGE_KEY] || undefined;

  if (!token && document.getElementById('user-account-control')) {
    const createApplicationTokenRes = await fetch(config.baseUrl + '/services/createApplicationToken/StarRez%20Plus');
    if (!createApplicationTokenRes.ok) {
      throw new Error(`Failed to create application token`, { cause: await createApplicationTokenRes.text() });
    }
    const { token: createdToken, code } = await createApplicationTokenRes.json();
    await showClaimApplicationTokenPopup();
    const claimTokenPopup = $('div.ui-popup-parent.popup-parent.claimapplicationtoken-account');
    claimTokenPopup.find('input[name="AccessCode"]').val(code);
    const tokenSaveButton = claimTokenPopup.find('div.ui-btn-ok[title="OK"]');
    tokenSaveButton.trigger("click");

    // Let the user confirm the creation of the token
    let tokenConfirmButton = document.querySelector('div.popup-parent.claimapplicationtoken-account div.popup-wrapper section.popup-container footer div.right div.ui-btn-ok');
    while (!tokenConfirmButton || tokenConfirmButton.classList.contains('loading')) {
      console.log(`Waiting for token confirmation button`);
      await waitFor(100);
      tokenConfirmButton = document.querySelector('div.popup-parent.claimapplicationtoken-account div.popup-wrapper section.popup-container footer div.right div.ui-btn-ok');
    }
    const tokenCancelButton = document.querySelector('div.popup-parent.claimapplicationtoken-account div.popup-wrapper section.popup-container footer div.right button.ui-btn-cancelpopup');

    if (!tokenConfirmButton || !tokenCancelButton) {
      throw new Error(`Failed to find token confirmation buttons`);
    }

    const confirmedPromise = new Promise<void>((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tokenConfirmButton!.addEventListener('click', () => {
        resolve();
      });
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tokenConfirmButton!.setAttribute("style", "background-color: #00a651; border-color: #00a651; color: #fff;");
      tokenCancelButton.addEventListener('click', () => {
        reject(new Error(`User cancelled token creation`));
      });
    });
    await confirmedPromise;

    browser.storage.onChanged.addListener((changes, namespace) => {
      for (const [key, { oldValue, newValue }] of Object.entries(changes)) {
        console.log(
          `Storage key "${key}" in namespace "${namespace}" changed.`,
          `Old value was "${oldValue}", new value is "${newValue}".`
        );
      }
    });

    console.log(`Created application token: ${createdToken}`);
    await browser.storage.local.set({ STARREZ_AUTH_TOKEN_STORAGE_KEY: createdToken });
    console.log(`Saved application token to storage`);
    token = await browser.storage.local.get([STARREZ_AUTH_TOKEN_STORAGE_KEY]);
    if (!token[STARREZ_AUTH_TOKEN_STORAGE_KEY]) {
      throw new Error(`Failed to get application token from storage`);
    }
    token = token[STARREZ_AUTH_TOKEN_STORAGE_KEY];
  }

  if (!token) {
    throw new Error(`Failed to get application token`);
  }

  return token;
}

async function showClaimApplicationTokenPopup() {
  const script = document.createElement('script');
  const scriptId = `starrez-plus-claim-application-token-popup-created-script-${Math.random().toString(36).substring(2)}`;
  script.id = scriptId;

  const promise = new Promise<void>((resolve) => {
    script.addEventListener("submit", () => {
      document.body.removeChild(script);
      resolve();
    });
  });
  script.textContent = `(() =>  {
    window.starrez.sm.ShowPopup('StarRezWeb', 'Account', 'UserAccount', void 0)
    .then(() => window.starrez.sm.ShowPopup('StarRezWeb', 'Account', 'ClaimApplicationToken', void 0))
    .then(
      () => {
        const event = new Event('submit');
        document.getElementById('${scriptId}').dispatchEvent(event);
      });
    })();`;
  document.body.appendChild(script);
  await promise;
}
