<template>
  <button class="x-button" :class="[buttonType, buttonSize]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "XButton",
};
</script>

<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    required: false,
    type: String,
    default: "default",
  },
  size: {
    required: false,
    type: String,
    default: "default",
  },
});
const buttonType = computed(() => "x-button--" + props.type);
const buttonSize = computed(() => "x-button-" + props.size);
</script>