<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2> -->
    <div><button class="button">rxjs</button></div>
    <img src="https://res.cloudinary.com/dohtkyi84/image/upload/c_scale,w_50/v1483019072/head-cover6.jpg" alt="">
  <img src="https://res.cloudinary.com/dohtkyi84/image/upload/c_scale,w_50/v1483019072/head-cover5.jpg" alt="">
  <img src="https://res.cloudinary.com/dohtkyi84/image/upload/c_scale,w_50/v1483019072/head-cover4.jpg" alt="">
  <img src="https://res.cloudinary.com/dohtkyi84/image/upload/c_scale,w_50/v1483019072/head-cover3.jpg" alt="">
  <img src="https://res.cloudinary.com/dohtkyi84/image/upload/c_scale,w_50/v1483019072/head-cover2.jpg" alt="">
  <img src="https://res.cloudinary.com/dohtkyi84/image/upload/c_scale,w_50/v1483019072/head-cover1.jpg" alt="">
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
    var imgList = document.getElementsByTagName('img');

var movePos = Rx.Observable.fromEvent(document, 'mousemove')
.map(e => ({ x: e.clientX, y: e.clientY }))

function followMouse(DOMArr) {
  const delayTime = 600;
  DOMArr.forEach((item, index) => {
   let temp= movePos.delay(delayTime * (Math.pow(0.2, index) + Math.cos(index / 4)) / 2);
   Rx.Observable.concat(temp)
      .subscribe(function (pos){
        item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
      });
  });
}

followMouse(Array.from(imgList))
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
img{
  position: absolute;
  border-radius: 50%;
  border: 3px white solid;
  transform: translate3d(0,0,0);
}
</style>
