import { computed, ref } from 'vue';
import { SECONDS_IN_HOUR } from '@/constants.js';
import { id } from '@/functions.js';

export const activities = ref(generateActivities());

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value));


export function addActivity(activity) {
  activities.value.push(activity);
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1);
}

export function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete || 0;
}

export function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name: name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }));
}
export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }));
}
