<template>
  <div class="father">
    <h3>父组件</h3>
    <h4> {{ str }}</h4>
    <button @click="handleClick(6, $event)">点击</button>
    <Child @custom-click="handleCustomClick" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue';
import { ref } from 'vue';

let str = ref("你好");

function handleClick(a: Number, e: Event) {
  console.log('handleClick', a,e);
  str.value = "haha";
}

function handleCustomClick(data: string, e: Event) {
  console.log('handleCustomClick', data, e);
}

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
}
</style>