<template>
  <button v-bind="$attrs" class="mp-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    size: {
      type: String,
      default: "normal"
    },
    theme: {
      type: String,
      default: "stander"
    }
  },
  setup(props, ctx) {
    const { size, theme } = props;
    const classes = computed(() => {
      return {
        [`mp-button--${size}`]: size,
        [`mp-button__${theme}`]: theme
      };
    });

    return { classes };
  }
};
</script>

<style lang="scss">
$h: 64px;

.mp-button {
  width: $h * 2;
  width: $h;
}
</style>
