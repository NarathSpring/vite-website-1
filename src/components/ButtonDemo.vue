<template>
  <div>
    <h1>Button 示例</h1>
    <!-- <Button
      @click="onClick"
      @focus="onFocus"
      @mouseover="onMouseover"
      theme
      level
      :disabled="false"
      loading
      >按钮 1</Button
    > -->
    <h3>size</h3>
    <Button size="big"> 大 </Button>
    <Button> 中 </Button>
    <Button size="small"> 小 </Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  },
  setup() {
    const onClick = () => {
      console.log("on click");
    };

    const onFocus = () => {
      console.log("on focus");
    };
    const onMouseover = () => {
      console.log("on mouseover");
    };

    return { onClick, onFocus, onMouseover };
  }
};
</script>
