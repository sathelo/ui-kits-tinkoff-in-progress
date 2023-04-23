<template>
  <button :class="className">{{ text }}</button>
</template>

<script setup>
import { listBtn } from "@/data/listsClasses";

const props = defineProps({
  className: {
    type: String,
    default: listBtn[0],
    validator: function (v) {
      return listBtn.includes(v);
    },
  },
  text: {
    type: String,
    default: "button",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  background-color: $bc;
  color: $c;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  border-radius: 0.5rem;
  font-size: 1rem;

  padding: 0.5rem 1rem;

  font-family: $ff--apple;

  &--primary {
  }
  &--secondary {
  }
  &--accent {
  }
  &--ghost {
  }
  &--link {
  }
}
</style>
