<template>
  <div class="topnav">
    <div class="logo"><strong>Logo</strong></div>
    <div class="menu">
      <ul>
        <li><router-link to="/"> 首 页 </router-link></li>
        <li><router-link to="/doc"> 文 章 </router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
  border-radius: 5px;
  > .logo {
    font-size: 24px;
  }
  ul {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    width: 100px;
  }
  li {
    // list-style: none;
  }
}
</style>
