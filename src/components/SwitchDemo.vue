<template>
  <h1>Switch 示例</h1>
  <Switch v-model:value="value" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch
  },
  setup() {
    const value = ref(false);

    return { value };
  }
};
</script>
