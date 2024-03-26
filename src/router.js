import { ref } from 'vue';
import { NAVIGATION_ITEMS } from '@/constants.js';
import { isPageValid } from '@/validators.js';

export const timelineRef = ref();
export const currentPage = ref(normalizePageHash());

export function normalizePageHash() {
  const page = window.location.hash.slice(1);
  if (isPageValid(page)) {
    return page;
  }
  window.location.hash = NAVIGATION_ITEMS.TIME_LINE.name;
  return NAVIGATION_ITEMS.TIME_LINE.name;
}
export function navigate(page) {
  if (currentPage.value === NAVIGATION_ITEMS.TIME_LINE.name && page === NAVIGATION_ITEMS.TIME_LINE.name) {
    timelineRef.value.scrollToHour();
  } else if (page !== NAVIGATION_ITEMS.TIME_LINE.name) {
    const mainElement = document.getElementById('main');
    mainElement.scrollTop = 0;
  }
  currentPage.value = page;
}
