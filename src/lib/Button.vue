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
$h: 32px;
$fontSize: 14px;
$color: #333;
$border-color: #d9d9d9;
$orange: #ffa500;
$radius: 4px;

.mp-button {
  box-sizing: border-box;
  width: $h * 2.5;
  height: $h;
  border: 1px solid $border-color;
  color: #333;
  border-radius: $radius;
  white-space: nowrap;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  cursor: pointer;
  &:hover,
  &:focus {
    color: $orange;
    border-color: $orange;
  }
  &:focus {
    // color: blue;
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

.mp-button--big {
  width: $h * 3;
  height: $h * 1.2;
  font-size: $fontSize + 2px;
}
.mp-button--normal {
  font-size: $fontSize;
}
.mp-button--small {
  width: $h * 2;
  height: $h * 0.9;
  font-size: $fontSize - 2px;
}
.mp-button__light {
}
.mp-button__dark {
}
</style>
