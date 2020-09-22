<template>
  <div>
    <div class="content">
      <aside class="aside">
        <div class="aside-content">
          <h3><router-link to="intro">简 介</router-link></h3>
          <h4><router-link to="a1">文章 1</router-link></h4>
          <h4><router-link to="a2">文章 2</router-link></h4>
          <h4><router-link to="a3">文章 3</router-link></h4>
          <h4><router-link to="a4">文章 4</router-link></h4>
          <h4><router-link to="a5">文章 5</router-link></h4>
        </div>
      </aside>
      <main class="main">
        <div class="main-content">
          <router-view />
        </div>
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
    }
  }
  > .main {
    width: 80%;
    height: 1000px;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 10px;
    > .main-content {
      margin: 24px;
    }
  }
}
</style>
