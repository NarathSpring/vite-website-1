<template>
  <div class="topnav">
    <div class="logo">Logo</div>
    <div class="menu">
      <ul>
        <li><router-link to="/"> 首页</router-link></li>
        <li><router-link to="/doc">文章</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.topnav {
  background-color: bisque;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    // flex-direction: row;
    width: 100px;
  }
  li {
    list-style: none;
  }
}
</style>
