<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import TheActivityForm from '@/components/TheActivityForm.vue';
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue';
import { activities } from '@/activities.js';
</script>

<template>
  <div data-testid="activities-page" class="flex flex-col grow">
    <ul
      data-testid="activities-list"
      v-if="activities.length>0"
      class="divide-y grow"
    >
      <ActivityItem
        data-testid="activity-item"
        v-for="activity in activities" :key="activity.id"
        :activity="activity"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm />
  </div>
</template>

<style scoped>

</style>
