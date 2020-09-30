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
    <div class="btn-size">
      <h3>size</h3>
      <div>
        <Button size="big"> 按钮 <strong>大</strong> </Button>
        <Button> 按钮 <strong>中</strong> </Button>
        <Button size="small"> 按钮 <strong>小</strong> </Button>
      </div>
    </div>

    <div class="btn-level">
      <h3>level</h3>
      <div>
        <Button level="default"> 默认按钮 </Button>
        <Button level="primary"> 主要按钮 </Button>
        <Button level="success"> 成功按钮 </Button>
        <Button level="warning"> 警告按钮 </Button>
        <Button level="danger"> 危险按钮 </Button>
      </div>
    </div>

    <div class="btn-theme">
      <h3>主题</h3>
      <div>
        <Button theme="light"> 一般主题 </Button>
        <Button theme="dark"> 暗黑主题 </Button>
      </div>
    </div>
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

<style lang="scss" scoped>
.btn-size,
.btn-level,
.btn-theme {
  // background: cadetblue;
  > div {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
