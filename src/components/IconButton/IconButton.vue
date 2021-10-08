<template>
  <button @click="$emit('click')" class="icon-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SettingsLocation extends Vue {}
</script>

<style scoped>
.icon-button {
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
