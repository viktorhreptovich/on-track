<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline';
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECOND } from '@/constants.js';
import { isTimelineItemValid } from '@/validators.js';
import { currentHour, formatSeconds } from '../functions.js';
import { ref, watch } from 'vue';
import { updateTimelineItemActivitySeconds } from '@/timeline-items.js';


const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
});

const seconds = ref(props.timelineItem.activitySeconds);

const isRunning = ref(false);

const isStartButtonDisabled = props.timelineItem.hour !== currentHour();

function start() {
  if (!isRunning.value) {
    isRunning.value = setInterval(() => {
      updateTimelineItemActivitySeconds(props.timelineItem, 1);
      seconds.value++;
    }, MILLISECONDS_IN_SECOND);
  }
}

function stop() {
  clearInterval(isRunning.value);
  isRunning.value = false;
}

function reset() {
  stop();
  updateTimelineItemActivitySeconds(props.timelineItem, -seconds.value);
  seconds.value = 0;
}

watch(() => props.timelineItem.activityId, () => {
  seconds.value = 0;
});

</script>

<template>
  <div class="flex w-full gap-2">
    <BaseButton
      :disabled="!seconds"
      :type="BUTTON_TYPE_DANGER"
      @click="reset"
    >
      <ArrowPathIcon class="h-6 w-6" />
    </BaseButton>
    <div
      data-testid="timeline-item-timer-value"
      class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-2xl"
    >
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton
      data-testid="timeline-stopwatch-stop-button"
      :type="BUTTON_TYPE_WARNING"
      @click="stop"
      v-if="isRunning">
      <PauseIcon class="h-6 w-6" />
    </BaseButton>
    <BaseButton
      data-testid="timeline-stopwatch-start-button"
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      v-if="!isRunning"
      :disabled="isStartButtonDisabled"
    >
      <PlayIcon class="h-6 w-6" />
    </BaseButton>
  </div>
</template>

<style scoped>

</style>
