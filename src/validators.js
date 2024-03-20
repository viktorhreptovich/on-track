import { BUTTON_TYPES, FINISH_HOUR, NAVIGATION_ITEMS, START_HOUR } from '@/constants.js';

export function isPageValid(page) {
  return Object.values(NAVIGATION_ITEMS).some((item) => item.name === page);
}

export function isNavigationItemValid(navigationItem) {
  return Object.values(NAVIGATION_ITEMS).includes(navigationItem);
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour);
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, START_HOUR, FINISH_HOUR - 1);
}

export function isBetween(value, min, max) {
  return value >= min && value <= max;
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid);
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value);
}

export function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label);
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid);
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value);
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isString(value) {
  return typeof value === 'string';
}


export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isNull(value) {
  return value === null;
}


export function validateActivities(activities) {
  return activities.every(isActivityValid);
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true;
  }
  return [
    isNotEmptyString(id),
    isNotEmptyString(name),
    isNumber(secondsToComplete)
  ].every(Boolean);
}

export function isNotEmptyString(value) {
  return isString(value) && value.length > 0;
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type);
}
