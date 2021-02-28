# vue_eventBus

vue事件总线eventBus实现原理

1 main.js中Vue.prototype.$eventBus=new Vue()，然后就可以全局使用$eventBus.$emit(事件名，事件值)和$eventBus.$on(事件名,callback)进行互相传值了

2 新建一个js文件，import Vue from 'vue';export default new Vue();在使用的vue文件中引入eventBus后eventBus.$emit(事件名，事件值)和eventBus.$on(事件名,callback)进行互相传值

3 主要原理是使用一个vue实例进行跨组件传值

react事件总线Bus实现原理

1 引入events包,const {EventEmitter}=require('events');const Bus=new EventEmitter();

2 Bus.emit("事件名",事件值);Bus.on("事件名",callback)
