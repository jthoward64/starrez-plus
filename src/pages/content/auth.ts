import { StarRezRestConfig } from '@src/lib/starrez-rest/StarRezRestConfig';
import browser from 'webextension-polyfill';
import $ from 'jquery';
import { STARREZ_AUTH_TOKEN_STORAGE_KEY } from '@src/lib/constants';

export async function getToken(config: StarRezRestConfig) {
  const result = await browser.storage.local.get(STARREZ_AUTH_TOKEN_STORAGE_KEY);
  const token = result[STARREZ_AUTH_TOKEN_STORAGE_KEY] || undefined;

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
    // tokenSaveButton.trigger("click");

    // // Let the user confirm the creation of the token
    // const tokenConfirmButton = claimTokenPopup.find('div.ui-btn-ok[title="OK"]');
    // const tokenCancelButton = claimTokenPopup.find('button.ui-btn-cancelpopup[title="Cancel"]');
    // const confirmedPromise = new Promise<void>((resolve, reject) => {
    //   tokenConfirmButton.on('click', () => {
    //     resolve();
    //   });
    //   tokenCancelButton.on('click', () => {
    //     reject(new Error(`User cancelled token creation`));
    //   });
    // });
    // await confirmedPromise;

    // await browser.storage.local.set({ STARREZ_AUTH_TOKEN_STORAGE_KEY: createdToken });
    // token = createdToken;
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
  script.textContent = `{
    window.starrez.sm.ShowPopup('StarRezWeb', 'Account', 'ClaimApplicationToken', void 0)
    .then(
      () => {
        const event = new Event('submit');
        document.getElementById('${scriptId}').dispatchEvent(event);
      });
    }`;
  document.body.appendChild(script);
  await promise;
}
