<template>
  <div class="outer" :class="{ checked: value }" @click="toggle">
    <span class="inner"></span>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean
  },
  setup(props, ctx) {
    // const x = ref(false);
    const toggle = () => {
      ctx.emit("update:value", !props.value);
    };

    return { toggle };
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.outer {
  width: $h * 2;
  height: $h;
  background: grey;
  border-radius: $h / 2;
  margin: 0 auto;
  position: relative;
  transition: 0.2s;
  > .inner {
    width: $h2;
    height: $h2;
    background: white;
    border-radius: $h2 / 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    transition: 0.2s;
  }
}
div.checked {
  // background: rgb(76, 194, 76);
  background: orange;
  // border: 1px solid lightgrey;
}
div.checked > .inner {
  left: $h + 2px;
  // background-color: orange;
}
</style>
