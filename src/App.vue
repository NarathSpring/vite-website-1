<template>
<div>
  <router-link to="/">First</router-link>
  <router-link to="/second">Second</router-link>
</div>
<router-view />
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>
