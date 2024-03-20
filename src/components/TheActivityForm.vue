<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { BUTTON_TYPE_PRIMARY } from '@/constants.js';
import { nextTick, ref } from 'vue';
import { id } from '@/functions.js';
import { addActivity } from '@/activities.js';

const name = ref('');

async function submit() {
  addActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0
  });
  name.value = '';
  await nextTick();
  const mainElement = document.getElementById('main');
  mainElement.scrollTop = mainElement.scrollHeight;
}
</script>

<script>
export default {
  inheritAttrs: false
};
</script>

<template>
  <form
    data-testid="add-activity-form"
    class="sticky bottom-0 flex gap-2 border-t bg-white p-4"
    @submit.prevent="submit"
  >
    <input
      data-testid="add-activity-input"
      type="text"
      class="w-full rounded border px-4 text-2xl"
      placeholder="Add an activity"
      v-model="name"
    />
    <BaseButton
      data-testid="add-activity-button"
      :type="BUTTON_TYPE_PRIMARY"
      :disabled="name.trim()===''">
      <PlusIcon class="h-6 w-6" />
    </BaseButton>
  </form>
</template>

<style scoped>

</style>
