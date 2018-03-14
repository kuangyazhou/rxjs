// import Rx from 'rxjs/Rx';
var Rx = require('rxjs/Rx');
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