<script setup>

import BaseButton from '@/components/BaseButton.vue';
import { TrashIcon } from '@heroicons/vue/24/outline/index.js';
import BaseSelect from '@/components/BaseSelect.vue';
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants.js';
import { isActivityValid } from '@/validators.js';
import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue';
import { deleteActivity, setActivitySecondsToComplete } from '@/activities.js';
import { resetTimelineItemActivities } from '@/timeline-items.js';



defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
});

function deleteAndResetActivity(activity) {
  deleteActivity(activity);
  resetTimelineItemActivities(activity);
}

</script>

<template>
  <li
    data-testid="activity-item"
    class="flex flex-col gap-2 p-4"
  >
    <div class="flex items-center gap-2">
      <BaseButton
        data-testid="activity-item-delete-button"
        :type="BUTTON_TYPE_DANGER"
        @click="deleteAndResetActivity(activity)"
      >
        <TrashIcon class="h-6 w-6" />
      </BaseButton>
      <span
        data-testid="activity-item-name"
        class="truncate text-2xl">{{ activity.name }}
      </span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm "
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="setActivitySecondsToComplete(activity, $event)"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>

  </li>
</template>

<style scoped>

</style>
