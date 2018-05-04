<template>
  <div>
        <span>姓名：{{ name$ }}</span>
        <span>年龄：{{ age$ }}</span>
        <button v-stream:click="setName$">点击设置name的值</button>
  </div>
</template>

<script>
// vue中使用rxjs  subscriptions为钩子函数,在created之前执行

import Vue from "vue";
import Rx from "rxjs/Rx";
import VueRx from "vue-rx";

Vue.use(VueRx, Rx);
export default {
  domStreams: ["setName$"],
  subscriptions() {
    return {
      age$: Rx.Observable.of(23).map(data => data),
      name$: this.setName$.map(e => "myName").startWith("")
    };
  }
};
</script>

