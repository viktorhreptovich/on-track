<script setup>
import TheLogo from '@/components/TheLogo.vue';
import TheHeaderProgress from '@/components/TheHeaderProgress.vue';

const emit = defineEmits(['goToTimeline','goToProgress']);
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between bg-white border-b p-3" data-testid="header">
    <TheLogo @click="emit('goToTimeline')" />
    <TheHeaderProgress @click="emit('goToProgress')"/>
  </header>
</template>

<style scoped></style>
