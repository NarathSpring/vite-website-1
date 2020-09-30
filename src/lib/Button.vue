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
    },
    level: {
      type: String,
      default: "default"
    }
  },
  setup(props, ctx) {
    const { size, theme, level } = props;
    const classes = computed(() => {
      return {
        [`mp-button--${size}`]: size,
        [`mp-button__${theme}`]: theme,
        [`mp-button__${level}`]: level
      };
    });

    return { classes };
  }
};
</script>

<style lang="scss">
@import "index";

.mp-button {
  cursor: pointer;
  box-sizing: border-box;
  font-size: $FontSize;
  padding: 10px 20px;
  border: 1px solid $LightPrimaryColor;
  color: $PrimaryText;
  border-radius: $BorderRadius;
  white-space: nowrap;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: 0.2s;
  &:hover,
  &:focus {
    color: $AccentColor;
    border-color: $AccentColor;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

.mp-button--big {
  padding: 12px 24px;
}
.mp-button--small {
  padding: 8px 16px;
}
.mp-button__light {
}
.mp-button__dark {
  background: $DarkPrimaryColor;
  color: $AccentColor;
}
</style>
