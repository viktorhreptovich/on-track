<script setup>
import { NAVIGATION_ITEMS } from '@/constants.js';
import { navigate } from '@/router.js';
</script>

<template>
  <a :href="NAVIGATION_ITEMS.TIME_LINE.link" @click="navigate( NAVIGATION_ITEMS.TIME_LINE.name)">
    <img src="../assets/img/logo.png" alt="Logo" class="h-9" data-testid="logo" />
  </a>
</template>

<style scoped>

</style>
