import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  // actions里面存放的是一些方法，用于响应组件中的动作
  actions: {
    increment(value: number) {
      // this就是store实例
      this.sum += value;
    }
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 1,
      school: 'asguigu',
    }
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
    upperSchool():string {
      return this.school.toUpperCase();
    }
  }
})