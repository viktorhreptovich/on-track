import { ref } from 'vue';
import { activities } from '@/activities.js';
import { HOURS_IN_DAY } from '@/constants.js';

export const timelineItems = ref(generateTimelineItems());

export function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId;
}

export function updateTimelineItemActivitySeconds(timelineItem, seconds) {
  timelineItem.activitySeconds += seconds;
}

export function resetTimelineItemActivities(activity) {
  timelineItems.value.forEach(timelineItem => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null;
      timelineItem.activitySeconds = 0;
    }
  });
}

function generateTimelineItems() {
  console.log(activities);
  return [...Array(HOURS_IN_DAY).keys()].map(hour => ({
    hour,
    activityId: [0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3].id : null,
    activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0
  }));

  // return [... Array(HOURS_IN_DAY).keys()].map(hour=>({
  //   hour,
  //   activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
  //   activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR
  // }));
}

export function getTotalActivitySeconds(activityId) {
  return timelineItems.value
    .filter(timelineItem => timelineItem.activityId === activityId)
    .reduce((totalSeconds, timelineItem) => totalSeconds + Math.round(timelineItem.activitySeconds), 0);
}
