<template>
  <div class="topnav">
    <img class="list" src="../assets/icons/C_liebiao.svg" @click="toggleList" />
    <div class="logo">
      <strong><router-link to="/">Logo</router-link></strong>
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/"> 首 页 </router-link></li>
        |
        <li><router-link to="/doc/intro"> 文 章 </router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const listVisible = inject<Ref<boolean>>("xxx");
    const toggleList = () => {
      listVisible.value = !listVisible.value;
      console.log(listVisible.value);
    };
    return { toggleList };
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  > .list {
    display: none;
  }
  > .logo {
    font-size: 24px;
  }
  ul {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    width: 130px;
  }
}
@media (max-width: 500px) {
  .topnav {
    display: block;
    > .list {
      display: inline-block;
      position: absolute;
      left: 30px;
      top: 2px;
      width: 24px;
    }
    > .menu {
      display: none;
    }
  }
}
</style>
