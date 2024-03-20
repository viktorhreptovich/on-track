<script setup>
import BaseSelect from '@/components/BaseSelect.vue';
import { isTimelineItemValid, isUndefined } from '@/validators.js';
import TimelineHour from '@/components/TimelineHour.vue';
import TimelineStopwatch from '@/components/TimelineStopwatch.vue';
import { activitySelectOptions } from '@/activities.js';
import { setTimelineItemActivity } from '@/timeline-items.js';


defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
});


const emit = defineEmits({
  scrollToHour: isUndefined
});

</script>

<template>
  <li data-testid="timeline-item"
      class="relative flex flex-col gap-2 border-t border-gray-200 pt-4 pb-6 px-4">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour')"
    />
    <BaseSelect
      data-testid="timeline-item-select"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch
      :timeline-item="timelineItem"
    />
  </li>
</template>

<style scoped>

</style>
