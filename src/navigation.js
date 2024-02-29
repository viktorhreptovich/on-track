import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js';

const navigationItems = {
  TIME_LINE: { name: 'timeline', icon: ClockIcon, link: '#timeline' },
  ACTIVITIES: { name: 'activities', icon: ListBulletIcon, link: '#activities' },
  PROGRESS: { name: 'progress', icon: ChartBarIcon, link: '#progress' }
};

export { navigationItems };
