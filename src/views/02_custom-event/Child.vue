<template>
  <div class="child">
    <h3>子组件</h3>
  </div>
</template>

<script setup lang="ts" name="Child">
import { onMounted } from 'vue';
// 声明事件
const emit = defineEmits(['customClick']);

onMounted(() => {
  setTimeout(() => {
    // 触发事件
    emit('customClick', 123, new Event('customClick'));
  }, 2000);
});
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>