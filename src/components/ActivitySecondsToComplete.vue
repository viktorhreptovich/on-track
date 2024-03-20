<script setup>

import { formatSeconds } from '@/functions.js';
import { isActivityValid } from '@/validators.js';
import { computed } from 'vue';
import { getTotalActivitySeconds } from '@/timeline-items.js';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
});

const secondsDifference = computed(() =>
  getTotalActivitySeconds(props.activity.id) - props.activity.secondsToComplete
);

const sign = computed(() => secondsDifference.value >= 0 ? '+' : '-');

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDifference.value)}`);

const colorClasses = computed(() => secondsDifference.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600');
const classes = computed(() => `flex items-center justify-center rounded font-bold font-mono px-2 text-2xl ${colorClasses.value}`);
</script>

<template>
  <div
    data-testid="activity-seconds-to-complete"
    :class="classes"
  >
    {{ seconds }}
  </div>
</template>

<style scoped>

</style>
