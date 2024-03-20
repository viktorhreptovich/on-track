import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js';
import { generatePeriodSelectOptions } from '@/functions.js';

export const NAVIGATION_ITEMS = {
  TIME_LINE: { name: 'timeline', icon: ClockIcon, link: '#timeline' },
  ACTIVITIES: { name: 'activities', icon: ListBulletIcon, link: '#activities' },
  PROGRESS: { name: 'progress', icon: ChartBarIcon, link: '#progress' }
};

export const HOURS_IN_DAY = 24;
export const START_HOUR = 0;
export const FINISH_HOUR = 24;
export const SECONDS_IN_HOUR = 3600;
export const SECONDS_IN_MINUTE = 60;
export const MINUTES_IN_HOUR = 60;
export const MILLISECONDS_IN_SECOND = 1000;

export const BUTTON_TYPE_PRIMARY = 'primary';
export const BUTTON_TYPE_SUCCESS = 'success';
export const BUTTON_TYPE_WARNING = 'warning';
export const BUTTON_TYPE_NEUTRAL = 'neutral';
export const BUTTON_TYPE_DANGER = 'danger';
export const BUTTON_TYPES = [BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER];

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions();
