<template>
  <div class="home">
    <div class="banner">
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
  border-radius: 3px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
