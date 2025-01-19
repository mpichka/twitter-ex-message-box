// ==UserScript==
// @name         Remove twitter message box
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Script to remove twitter message box
// @author       Mykhailo Pichka
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @run-at       document-idle
// @grant        none
// ==/UserScript==

// Щоб змінити налаштування - призначте відповідному полю значення true (увімкнути) або false (вимкнути)

// Налаштування:
const REMOVE_MESSAGE_BOX = true;
const REMOVE_GROK_BUTTON = true;
const REMOVE_GROK_MENU_ITEM = true;
const REMOVE_BLUE_CHECK_AD = true;
const REMOVE_VACANCIES_MENU_ITEM = true;
const REMOVE_ADS_MENU_ITEM = true;
const REMOVE_VERIFIED_ORGS_MENU_ITEM = true;
const REMOVE_MONETIZATION_MENU_ITEM = true;
const REMOVE_GROK_UTILITIES = true;

(function () {
  'use strict';
  const TIMEOUT = 500; // оновлення екрану через кожні 0.5 секунди

  const loadingTimer = setInterval(() => {
    if (REMOVE_MESSAGE_BOX) removeMessageBox();
    if (REMOVE_GROK_BUTTON) removeGrokButton();
    if (REMOVE_GROK_MENU_ITEM) removeGrokFromMenu();
    if (REMOVE_BLUE_CHECK_AD) removeBlueCheckAd();
    if (REMOVE_VACANCIES_MENU_ITEM) removeVacanciesFromMenu();
    if (REMOVE_ADS_MENU_ITEM) removeAdsFromMenu();
    if (REMOVE_VERIFIED_ORGS_MENU_ITEM) removeVerifiedOrgsFromMenu();
    if (REMOVE_MONETIZATION_MENU_ITEM) removeMonetizationFromMenu();
    if (REMOVE_GROK_UTILITIES) removeGrokUtilities();
  }, TIMEOUT);
})();

function removeMessageBox() {
  document.querySelector('[data-testid="DMDrawer"]')?.remove();
}

function removeGrokButton() {
  document.querySelector('[data-testid="GrokDrawerHeader"]')?.parentElement.remove();
}

function removeGrokFromMenu() {
  document.querySelector('a[aria-label="Grok"][role="link"]')?.remove();
}

function removeBlueCheckAd() {
  document.querySelector('a[href="/i/premium_sign_up"]')?.remove();
}

function removeVacanciesFromMenu() {
  document.querySelector('a[href="/jobs"][role="link"]')?.remove();
}

function removeAdsFromMenu() {
  document
    .querySelector(
      'a[href="https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"]',
    )
    ?.remove();
}

function removeVerifiedOrgsFromMenu() {
  document
    .querySelector('a[href="/i/verified-orgs-signup"][role="link"]')
    ?.remove();
}

function removeMonetizationFromMenu() {
  document.querySelector('a[href="/i/monetization"][role="link"]')?.remove();
}

function removeGrokUtilities() {
  document.querySelector('button[data-testid="grokImgGen"]')?.remove();
  document
    .querySelector('div[class="css-175oi2r r-1777fci r-1wzrnnt"]')
    ?.remove();
  document
    .querySelectorAll(
      'div[class="css-175oi2r r-1s2bzr4 r-dnmrzs r-bnwqim"]',
    )
    ?.forEach((el) => el?.remove());
}
