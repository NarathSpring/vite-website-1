<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/avatar.jpg" alt="" />
      <h1>Zelda</h1>
      <h2>The Legend of Zelda</h2>
      <p>
        <strong>"The Legend of Zelda: Breath of the Wild"</strong>
      </p>
      <br />
    </div>
    <p class="actions">
      <a href="https://github.com/NarathSpring" target="blank">GitHub</a> |
      <router-link to="/doc/intro">Artical</router-link>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  // background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  // height: 300px;
  border-radius: 3px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  > .actions {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 30px;
    // margin-top: 200px;
  }
}
</style>
