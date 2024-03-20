<script>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING
} from '@/constants.js';

const typeClasses = {
  [BUTTON_TYPE_PRIMARY]: 'bg-blue-500 p-3 enabled:hover:bg-blue-600 text-whitebg-green-500 p-3 enabled:hover:bg-green-600 text-white',
  [BUTTON_TYPE_SUCCESS]: 'bg-green-500 p-3 enabled:hover:bg-green-600 text-white',
  [BUTTON_TYPE_WARNING]: 'bg-yellow-500 p-3 enabled:hover:bg-yellow-600 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 p-3 enabled:hover:bg-gray-300',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 p-3 enabled:hover:bg-red-600 text-white'
};

</script>

<script setup>
import { isButtonTypeValid } from '@/validators.js';

const props = defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_PRIMARY,
    validator: isButtonTypeValid
  }
});

const classes = `${typeClasses[props.type]} rounded disabled:cursor-not-allowed disabled:opacity-50`;
</script>

<template>
  <button
    :class="classes"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
