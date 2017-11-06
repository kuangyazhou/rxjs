// import Rx from 'rxjs/Rx';
var Rx = require('rxjs/Rx');
//单js文件import无法使用,报错

const source = Rx.Observable.fromPromise(new Promise(resolve => resolve(1)));
const example = source.map(val => val + 10);
const subscribe = example.subscribe(val => console.log(val));