<template>
  <div class="home">
    <div class="banner">
      <h1>某某某</h1>
      <h2>The blog of 某某某</h2>
      <p>
        I like video games. I like
        <strong>"The Legend of Zelda: Breath of the Wild"</strong> the best
      </p>
      <p class="actions">
        <a href="https://github.com/NarathSpring" target="blank">GitHub</a> |
        <router-link to="/doc/intro">Artical</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  height: 300px;
  background-color: chocolate;
  border-radius: 10px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
