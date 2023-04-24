<template>
  <component :is="heroIcons[name]" />
</template>

<script setup>
import * as heroIcons from "@heroicons/vue/24/solid";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
