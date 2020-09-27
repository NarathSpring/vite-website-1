<template>
  <div>
    <div class="content">
      <aside class="aside" v-if="listVisible">
        <div class="aside-content">
          <h3><router-link to="intro">简 介</router-link></h3>
          <h4><router-link to="switch">Switch 组件</router-link></h4>
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
import { inject, Ref } from "vue";
export default {
  setup() {
    const listVisible = inject<Ref<boolean>>("listVisible");

    return { listVisible };
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  margin-top: 4px;
  > .aside {
    width: 20%;
    height: 800px;
    margin-right: 4px;
    background-image: linear-gradient(45deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 3px;
    > .aside-content {
      margin: 16px;
    }
  }
  > .main {
    width: 80%;
    height: 800px;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 3px;
    > .main-content {
      margin: 24px;
    }
  }
}
@media (max-width: 500px) {
  .content {
    > .aside {
      width: 65%;
      position: absolute;
    }
    > .main {
      width: 100%;
    }
  }
}
</style>
