<script setup>
import { isNavigationItemValid } from '@/validators.js';
import { currentPage, navigate } from '@/router.js';
import { computed } from 'vue';


const props = defineProps({
  navItem: {
    type: Object,
    required: true,
    validator: isNavigationItemValid
  }
});

const classes = computed(() => [
  "flex flex-col items-center p-2 text-xs capitalize",
  { 'bg-gray-200 pointer-events-none': props.navItem.name === currentPage.value }
]);
</script>

<template>
  <li data-testid="navigation-item" class="flex-1">
    <a
      :data-testid="`navigation-item-${navItem.name}-link`"
      :class="classes"
      :href="navItem.link"
      @click="navigate( navItem.name)"
    >
      <component :is="navItem.icon" class="h-6 w-6" /> {{ navItem.name }}
    </a>
  </li>
</template>

<style scoped></style>
