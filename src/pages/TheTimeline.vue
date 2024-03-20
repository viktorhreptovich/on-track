<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { nextTick, ref, watchPostEffect } from 'vue';
import { NAVIGATION_ITEMS } from '@/constants.js';
import { currentPage } from '@/router.js';
import { currentHour } from '@/functions.js';
import { timelineItems } from '@/timeline-items.js';

defineExpose({ scrollToHour });

const timelineItemRefs = ref([]);
watchPostEffect(async () => {
  if (currentPage.value === NAVIGATION_ITEMS.TIME_LINE.name) {
    await nextTick();
    scrollToHour(null, false);
  }
});

function scrollToHour(hour, isSmooth = true) {
  hour ??= currentHour();
  const el = hour === 0 ? document.body : timelineItemRefs.value[hour - 1].$el;
  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' });
}
</script>

<template>
  <div data-testid="timeline-page" class="mt-7">
    <ul data-testid="timeline-list">
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour" :timeline-item="timelineItem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>

<style scoped></style>
