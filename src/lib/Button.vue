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
      default: "light"
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
$fontSize: 14px;
$color: #333;
$border-color: #d9d9d9;
$orange: #ffa500;
$radius: 4px;

.mp-button {
  cursor: pointer;
  box-sizing: border-box;
  font-size: $fontSize;
  padding: 10px 20px;
  border: 1px solid $border-color;
  color: #333;
  border-radius: $radius;
  white-space: nowrap;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: 0.2s;
  &:hover,
  &:focus {
    color: $orange;
    border-color: $orange;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

.mp-button--big {
  // font-size: $fontSize + 2px;
  padding: 12px 24px;
}
.mp-button--small {
  // font-size: $fontSize - 2px;
  padding: 8px 16px;
}
.mp-button__light {
}
.mp-button__dark {
}
</style>
