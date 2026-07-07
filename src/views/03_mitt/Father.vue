<template>
  <div class="father">
    <h3>父组件</h3>
    <Child />
    <Child2> </Child2>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue';
import Child2 from './Child2.vue';
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
}
</style>