<template>
  <div>
    <div id="app"></div>
    <div id="rxClock"></div>
  </div>
</template>

<script>
import Rx from "rxjs/Rx";
import { Observable, Observer, Subject } from "rxjs";
export default {
  name: "Lesson",
  data() {
    return {};
  },
  mounted() {
    // 模拟Observle对象 并没有引用RX库
    let Observable = function(generator) {
      this._generator = generator;
    };
    Observable.prototype.subscribe = function(observer) {
      this._generator.call(this, observer);
    };
    const Observer = function(consumer) {
      this._consumer = consumer;
    };
    Observer.prototype.onNotify = function(data) {
      this._consumer.call(this, data);
    };
    let clock = document.getElementById("app");
    let Rxclock = document.getElementById("rxClock");
    let time = () => {
      let time = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
      let d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
      return [time[h] || h, time[m] || m, time[s] || s].join(":");
    };
    let stream = new Observable(observer => {
      setInterval(() => {
        observer.onNotify(time());
      }, 1000);
    });
    let UI = new Observer(data => {
      clock.textContent = data;
    });
    stream.subscribe(UI);

    // 使用rxjs库完成clock; create 报错无法运行
    // const rxStream = Rx.Observable.create(e => {
    //   setInterval(() => {
    //     e.next(time());
    //   }, 1000);
    // });
    // const UIRefresher = Rx.Observer.create(function(data) {
    //   elClock.textContent = data;
    // });
    // rxStream.subscribe(UIRefresher);

    // let a = Rx.Observable.from([1, 2, 3, 4]);
    // let b = a.toArray();
    // console.log(a, a.concat(b));
    // a.map(e => {
    //   console.log(e * 10);
    // });

    Rx.Observable.of(1, 2, 3) // 1 2 3
      .map(function(d) {
        return d * 10;
      }) // 10 20 30
      .concat(Rx.Observable.from([4, 5, 6])) // 10 20 30 4 5 6
      .subscribe(
        function(d) {
          console.log(d);
        },
        function(e) {
          console.log(e);
        },
        function() {
          console.log("done");
        }
      );
  }
};
</script>

<style>
#rxClock {
  font-size: 22px;
  color: aqua;
}
</style>
