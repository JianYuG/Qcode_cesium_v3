<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4 v-show="toy">得到的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onUnmounted } from 'vue';
import emitter from '@/utils/emitter';

const computer = ref('联想');
const toy = ref('');

emitter.on("send-toy", (data: any) => {
  toy.value = data;
})



onUnmounted(() => {
  emitter.off("send-toy");
})
</script>

<style scoped>
.child2 {
  background-color: rgb(13, 110, 91);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>
