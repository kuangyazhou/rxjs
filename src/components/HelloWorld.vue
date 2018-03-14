<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2> -->
    <div><button class="button">rxjs</button></div>
  </div>
</template>

<script>
import Rx from 'rxjs/Rx';

export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      msg:'fuck the king!!!'
    }
  },
  mounted(){
// var Rx = require('rxjs/Rx');
//单js文件import无法使用,报错

const source = Rx.Observable.fromPromise(new Promise(resolve => resolve(1)));
const example = source.map(val => val + 10);
const subscribe = example.subscribe(val => console.log(val));

//注册事件的常规写法
const button = document.querySelector('button');
button.addEventListener('click', () => { console.log('clicked') });

// 使用observable
Rx.Observable.fromEvent(button, 'click')
    .subscribe(() => {
        console.log('clicked!!!!')
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
