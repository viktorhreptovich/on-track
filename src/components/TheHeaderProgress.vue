<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid/index.js';
import { NAVIGATION_ITEMS } from '@/constants.js';
import { navigate } from '@/router.js';
</script>

<template>
  <a :href="NAVIGATION_ITEMS.PROGRESS.link"
     class="text-sm"
     @click="navigate( NAVIGATION_ITEMS.PROGRESS.name)">
    <div v-if="false" class="flex items-center gap-1">
      Day complete!
      <div data-testid="check-circle-icon">
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
    </div>
    <div v-else class="flex items-center gap-1">
      <div data-testid="header-progress" class="font-mono">Progress: 20%</div>
      <div data-testid="header-progress-indicator" class="w-3 h-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>

<style scoped></style>
