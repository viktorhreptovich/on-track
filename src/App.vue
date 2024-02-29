<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheNavigation from '@/components/TheNavigation.vue';
import TheTimeline from '@/pages/TheTimeline.vue';
import TheActivities from '@/pages/TheActivities.vue';
import TheProgress from '@/pages/TheProgress.vue';
import { navigationItems } from '@/navigation.js';
import { ref } from 'vue';

function normalizePageHash() {
  const hash = window.location.hash.slice(1);
  if (navigationItems.some((item) => item.name === hash)) {
    return hash;
  }
  window.location.hash = navigationItems[0].name;
  return navigationItems[0].name;
}

const currentPage = ref(normalizePageHash());
</script>

<template>
  <TheHeader />
  <main data-testid="main-content" class="flex flex-col grow">
    <TheTimeline v-show="currentPage === navigationItems[0].name" />
    <TheActivities v-show="currentPage === navigationItems[1].name" />
    <TheProgress v-show="currentPage === navigationItems[2].name" />
  </main>
  <TheNavigation :current-page="currentPage" @navigate="currentPage = $event" />
</template>

<style scoped></style>
