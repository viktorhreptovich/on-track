<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid/index.js';
</script>

<template>
  <a href="#" class="text-sm">
    <div v-if="true" class="flex items-center gap-1">
      Day complete!
      <div data-testid="check-circle-icon">
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
    </div>
    <div v-else class="flex items-center gap-1">
      <div data-testid="progress" class="font-mono">Progress: 20%</div>
      <div data-testid="progress-indicator" class="w-3 h-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>

<style scoped></style>
