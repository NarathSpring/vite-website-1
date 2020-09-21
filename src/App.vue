<template>
  <Topnav />
  <router-view />
</template>

<script lang="ts">
import Topnav from "./components/Topnav.vue";
export default {
  name: "App",
  components: {
    Topnav
  }
};
</script>

<style lang="scss" scoped></style>
