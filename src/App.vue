<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheNavigation from '@/components/TheNavigation.vue';
import TheTimeline from '@/pages/TheTimeline.vue';
import TheActivities from '@/pages/TheActivities.vue';
import TheProgress from '@/pages/TheProgress.vue';
import { NAVIGATION_ITEMS } from '@/constants.js';
import { currentPage, normalizePageHash, timelineRef } from '@/router.js';

window.addEventListener('hashchange', () => {
  currentPage.value = normalizePageHash();
});


</script>

<template>
  <TheHeader />
  <main id="main"
        data-testid="main-content"
        class="flex flex-col grow scrollbar-thin h-32 overflow-auto">
    <!--        class="flex flex-col grow scrollbar-thin h-32 overflow-auto">-->
    <TheTimeline v-show="currentPage === NAVIGATION_ITEMS.TIME_LINE.name" ref="timelineRef" />
    <TheActivities v-show="currentPage === NAVIGATION_ITEMS.ACTIVITIES.name" />
    <TheProgress v-show="currentPage === NAVIGATION_ITEMS.PROGRESS.name" />
  </main>
  <TheNavigation />
</template>

<style scoped></style>
