<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父传递的数据：{{ car }}</h4>
    <button @click="sendToy(toy)">传递玩具给父组件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue';

let toy = ref('玩具熊');

// 声明接收父组件传递过来的数据
defineProps(["car", "sendToy"]);
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>