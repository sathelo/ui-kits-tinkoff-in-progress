<template>
  <button v-if="icon" @click="getClick" :class="className">
    <VIcon v-if="iconPos === 'Left'" name="" />
    <p>{{ text }}</p>
    <VIcon v-if="iconPos === 'Right'" name="" />
  </button>
  <button v-else @click="getClick" :class="className">{{ text }}</button>
</template>

<script setup>
import { listBtn, listIconPos } from "@/data/listsClasses";
import VIcon from "@/components/VIcon";

defineProps({
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
  icon: {
    type: String,
    validator: function (v) {
      return listIcon.includes(v);
    },
  },
  iconPos: {
    type: String,
    validator: function (v) {
      return listIconPos.includes(v);
    },
  },
});

const emits = defineEmits(["onClick"]);

function getClick(event) {
  emits("onClick", event);
}
</script>

<style lang="scss" scoped>
.btn {
  @include btn($grey);

  &--primary {
    @include btn($white, $primary);
  }
  &--secondary {
    @include btn($white, $secondary);

    &-destructive {
      @include btn($white, $secondary-destructive);
    }
  }
  &--accent {
    @include btn($white, $accent);
  }
  &--flat {
    @include btn($white);
  }
  &--outline {
    @include btn($white);

    border: 1px solid $white;
  }
}
</style>
