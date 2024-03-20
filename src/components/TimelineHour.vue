<script setup>
import { isHourValid } from '@/validators.js';
import { currentHour } from '@/functions.js';

const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid
  }
});

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg ',
  props.hour === currentHour() ? 'bg-blue-600 font-bold text-white' : 'bg-gray-100 text-gray-500'
];

const formattedHour = `${props.hour.toString().padStart(2, '0')}:00`;
</script>

<template>
  <a data-testid="timeline-item-link" href="#" :class="classes">{{ formattedHour }}</a>
</template>

<style scoped>

</style>
