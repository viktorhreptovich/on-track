<script setup>
import { computed } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/solid/index.js';
import { isSelectValueValid, isUndefinedOrNull, validateSelectOptions } from '@/validators.js';
import { BUTTON_TYPE_NEUTRAL } from '@/constants.js';
import { normalizeSelectValue } from '@/functions.js';


const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  placeholder: {
    type: String,
    required: true
  },
  selected: {
    type: [String, Number]
  }
});

const emit = defineEmits({
  select: isSelectValueValid
});

const isNotSelected = computed(() => isUndefinedOrNull(props.selected));

function select(value) {
  emit('select', normalizeSelectValue(value));

}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton data-testid="select-clear-button" :type="BUTTON_TYPE_NEUTRAL" @click="select( null)">
      <XMarkIcon class="h-6 w-6" />
    </BaseButton>
    <select
      data-testid="select"
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="select($event.target.value)">
      <option :selected="isNotSelected" disabled value="0">{{ placeholder }}</option>
      <option v-for="{value, label} in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
