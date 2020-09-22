<template>
  <div>
    <div class="content">
      <aside class="aside">
        <div class="aside-content">目录</div>
      </aside>
      <main class="main">
        <div class="main-content">主要内容</div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  margin-top: 8px;
  > .aside {
    width: 20%;
    height: 1000px;
    margin-right: 8px;
    background-image: linear-gradient(45deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 10px;
    > .aside-content {
      margin: 16px;
      border: 1px solid black;
    }
  }
  > .main {
    width: 80%;
    height: 1000px;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 10px;
    > .main-content {
      // position: relative;
      // width: 100%;
      // height: 100%;
      margin: 24px;
      border: 1px solid black;
    }
  }
}
</style>
