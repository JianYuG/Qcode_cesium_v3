<template>
  <div class="app-container">
    <CesiumMap />
  </div>
</template>

<script setup lang="ts">
import CesiumMap from './components/CesiumMap.vue'
</script>

<style>
.app-container {
  width: 100%;
  height: 100%;
}
</style>
