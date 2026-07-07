<template>
  <div class="header">vue3组件通信</div>
  <div class="app">
    <div class="row">
      <router-link active-class="active" class="item" to="/props">1.props</router-link>
      <router-link active-class="active" class="item" to="/customEvent">2.自定义事件</router-link>
      <router-link active-class="active" class="item" to="/mitt">3.mitt</router-link>
      <router-link active-class="active" class="item" to="/vModel">4.v-model</router-link>
      <router-link active-class="active" class="item" to="/attrs">5.$attrs</router-link>
      <router-link active-class="active" class="item" to="/refs">6.$refs、$parent</router-link>
      <router-link active-class="active" class="item" to="/provideInject">7.provide、inject</router-link>
      <router-link active-class="active" class="item" to="/pinia">8.pinia</router-link>
      <router-link active-class="active" class="item" to="/slot">9.slot</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
import { RouterLink, RouterView } from 'vue-router';

</script>

<style>
.header {
  width: 100%;
  height: 100px;
  background-color: rgb(141, 100, 100);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}
.app {
  width: 100%;
  height: calc(100% - 100px);
  background-color: antiquewhite;
  display: flex;
}

.row {
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 23px;
}

.item {
  cursor: pointer;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(165, 164, 164);
  border: 1px solid rgb(100, 98, 98);
}

.content {
  width: 100%;
  height: 100%;
}

.active {
  color: red;
}
</style>
