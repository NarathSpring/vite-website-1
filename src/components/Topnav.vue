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
    const listVisible = inject<Ref<boolean>>("listVisible");
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
  height: 2.5rem;
  background-image: linear-gradient(35deg, #a8acaf 0%, #c9d1d4 100%);
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  // box-shadow: 0 7px 7px grey;
  > .list {
    display: none;
    width: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
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
    justify-content: center;
    > .list {
      display: inline-block;
    }
    > .menu {
      display: none;
    }
  }
}
</style>
