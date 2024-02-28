<script setup>
import TheLogo from '@/components/TheLogo.vue';
import TheHeaderProgress from '@/components/TheHeaderProgress.vue';
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between bg-white border-b p-3" data-testid="header">
    <TheLogo />
    <TheHeaderProgress />
  </header>
</template>

<style scoped></style>
