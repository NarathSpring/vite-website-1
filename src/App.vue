<template>
  <Topnav />
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import Topnav from "./components/Topnav.vue";
import router from "./config/router";
export default {
  name: "App",
  components: {
    Topnav
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const listVisible = ref(width <= 500 ? false : true);
    provide("listVisible", listVisible);

    router.afterEach(() => {
      if (width <= 500) {
        listVisible.value = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped></style>
