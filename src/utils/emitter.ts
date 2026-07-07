// 引入mitt
import mitt from 'mitt';

// 调用mitt得到emitter实例：emitter能绑定事件和触发事件
const emitter = mitt();

// 暴露
export default emitter;