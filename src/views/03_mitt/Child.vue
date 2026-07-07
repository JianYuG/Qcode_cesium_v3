<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emitter.emit('send-toy', toy)">发送玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue';
import emitter from '@/utils/emitter';

const toy = ref('小熊');

</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>