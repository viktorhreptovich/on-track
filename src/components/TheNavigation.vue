<script setup>
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js';
import NavigationItem from '@/components/NavigationItem.vue';
import { ref } from 'vue';

const navigationItems = [
  { name: 'timeline', icon: ClockIcon, link: '#timeline' },
  { name: 'activities', icon: ListBulletIcon, link: '#activities' },
  { name: 'progress', icon: ChartBarIcon, link: '#progress' }
];
const currentPage = ref('timeline');
</script>

<template>
  <nav data-testid="navigation" class="sticky bottom-0 z-20 bg-white border-t">
    <ul data-testid="navigation-list" class="flex items-center justify-around">
      <NavigationItem
        v-for="item in navigationItems"
        :key="item.name"
        :data-testid="`${item.name}-link`"
        :href="item.link"
        :class="{ 'bg-gray-200 pointer-events-none': item.name === currentPage }"
        @click="currentPage = item.name"
      >
        <component :is="item.icon" class="h-6 w-6" />
        {{ item.name }}
      </NavigationItem>
    </ul>
  </nav>
</template>

<style scoped></style>
