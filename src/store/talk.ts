import { defineStore } from 'pinia';

// export const useTalkStore = defineStore('talk', {
//   // 真正存储数据的地方
//   state() {
//     return {
//       talkList: [
//         {
//           id: 'asadjh001',
//           title: '第一句话',
//         },{
//           id: 'asadjh002',
//           title: '第二句话',
//         }
//       ],
//     }
//   }
// })


// 组合式写法
import { reactive } from 'vue';
export const useTalkStore = defineStore('talk', () => {
  // 真正存储数据的地方
  const talkList = reactive([
    {
      id: 'asadjh001',
      title: '第一句话',
    },{
      id: 'asadjh002',
      title: '第二句话',
    }
  ]);

  function addTalk() {
    talkList.push({
      id: 'asadjh003',
      title: '第三句话',
    });
  }

  return {
    talkList, addTalk
  };
});