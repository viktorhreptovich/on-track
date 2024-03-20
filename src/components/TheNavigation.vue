<script setup>

import NavigationItem from '@/components/NavigationItem.vue';
import { NAVIGATION_ITEMS } from '@/constants.js';
</script>

<template>
  <nav data-testid="navigation" class="sticky bottom-0 z-20 bg-white border-t">
    <ul data-testid="navigation-list" class="flex items-center justify-around">
      <NavigationItem
        v-for="item in NAVIGATION_ITEMS"
        :key="item.name"
        :nav-item="item"
      />
    </ul>
  </nav>
</template>

<style scoped></style>
