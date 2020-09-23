<template>
  <Topnav />
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import Topnav from "./components/Topnav.vue";
export default {
  name: "App",
  components: {
    Topnav
  },
  setup() {
    const listVisible = ref(false);
    provide("xxx", listVisible);
  }
};
</script>

<style lang="scss" scoped></style>
