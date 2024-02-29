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
  Object.values(navigationItems).forEach((item) =>
    console.log(item)
  );
  if (Object.values(navigationItems).some((item) => item.name === hash)) {
    return hash;
  }
  window.location.hash = navigationItems.TIME_LINE.name;
  return navigationItems.TIME_LINE.name;
}

const currentPage = ref(normalizePageHash());
</script>

<template>
  <TheHeader @go-to-timeline="currentPage = navigationItems.TIME_LINE.name"
             @go-to-progress="currentPage = navigationItems.PROGRESS.name"
  />
  <main data-testid="main-content" class="flex flex-col grow">
    <TheTimeline v-show="currentPage === navigationItems.TIME_LINE.name" />
    <TheActivities v-show="currentPage === navigationItems.ACTIVITIES.name" />
    <TheProgress v-show="currentPage === navigationItems.PROGRESS.name" />
  </main>
  <TheNavigation :current-page="currentPage" @navigate="currentPage = $event" />
</template>

<style scoped></style>
