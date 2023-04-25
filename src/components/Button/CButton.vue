<template>
  <button
    v-if="icon"
    :disabled="disabled"
    @click="getClick"
    :class="getClassName"
  >
    <VIcon v-if="iconPos === 'left'" :name="icon" :class="getClassName" />
    {{ text }}
    <VIcon v-if="iconPos === 'right'" :name="icon" :class="getClassName" />
  </button>
  <button v-else :disabled="disabled" @click="getClick" :class="getClassName">
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from "vue";
import { listBtn, listIconPos, listSize } from "@/data/listsClasses";
import * as listIcon from "@heroicons/vue/24/solid";
import VIcon from "@/components/VIcon";

const props = defineProps({
  className: {
    type: String,
    default: listBtn[0],
    validator: function (v) {
      return listBtn.includes(v.toLowerCase());
    },
  },
  text: {
    type: String,
    default: "button",
  },
  icon: {
    type: String,
    validator: function (v) {
      return Object.keys(listIcon).includes(v);
    },
  },
  iconPos: {
    type: String,
    default: "right",
    validator: function (v) {
      return listIconPos.includes(v.toLowerCase());
    },
  },
  size: {
    type: String,
    default: "l",
    validator: function (v) {
      return listSize.includes(v.toLowerCase());
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["onClick"]);

const getClassName = computed(() => {
  let className = `${props.className.toLowerCase()} ${props.size.toLowerCase()}`;

  if (props.icon) className += " " + "icon";
  if (props.disabled) className += " " + "disabled";

  return className;
});

function getClick(event) {
  emits("onClick", event);
}
</script>

<style lang="scss" scoped></style>
