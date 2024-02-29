<script setup>

import NavigationItem from '@/components/NavigationItem.vue';
import { navigationItems } from '@/navigation.js';

defineProps(['currentPage']);

const emit = defineEmits(['navigate']);

</script>

<template>
  <nav data-testid="navigation" class="sticky bottom-0 z-20 bg-white border-t">
    <ul data-testid="navigation-list" class="flex items-center justify-around">
      <NavigationItem
        v-for="item in navigationItems"
        :key="item.name"
        :data-testid="`${item.name}-link`"
        :href="item.link"
        :class="{ 'bg-gray-200 pointer-events-none': item.name === currentPage }"
        @click="emit('navigate', item.name)"
      >
        <component :is="item.icon" class="h-6 w-6" />
        {{ item.name }}
      </NavigationItem>
    </ul>
  </nav>
</template>

<style scoped></style>
