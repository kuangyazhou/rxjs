<template>
  <div class="">
  </div>
</template>

<script>
import Rx from "rxjs/Rx";
import { Observable, Observer, Subject } from "rxjs";

export default {
  name: "Todo",
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App'
    };
  },
  mounted() {
    //   const $input = <HTMLInputElement>document.querySelector('.todo-val');
    // rxjs API has been changed onNext => next onComplete =>complete
    Rx.Observable.create(function(observer) {
      observer.next("A");
      observer.next("B");
      observer.complete();
    }).subscribe(
      function(data) {
        console.log(data);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("done!");
      }
    );

    let a = Rx.Observable.from([1, 2, 3, 4]);
    let b = a.toArray();
    console.log(a, b);
    a.map(function(d, i) {
      return d * 10;
    });

    Rx.Observable.of(1, 2, 3)
      .map(function(d) {
        return d * 10;
      })
      .concat(Rx.Observable.from([4, 5, 6]))
      .subscribe(
        d => {
          console.log(d);
        },
        err => {
          console.log(err);
        },
        () => {
          console.log("done");
        }
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
