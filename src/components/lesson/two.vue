<template>
  <div>
    <div id="app"></div>
    <div id="rxClock"></div>
  </div>
</template>

<script>
import Rx from "rxjs/Rx";
import { Observable, Observer, Subject } from "rxjs";
import TimelineCanvas from "timeline";
export default {
  name: "Lesson",
  data() {
    return {};
  },
  mounted() {
    const Placeholder = text => {
      var el = document.createElement("div");
      el.innerHTML = "<h1>" + text + "</h1>";
      document.body.appendChild(el);
    };
    var TL = TimelineCanvas;
    var tl_input = new TL("input");
    var tx = new Placeholder("filter()");
    var tl_output = new TL("output");
    var timelines = [tl_input, tl_output];
    var input = Rx.Observable.timer(0, 1000);
    var output = input.filter(function(d) {
      return d % 2 === 0;
    });
    [input, output].forEach(function(s, i) {
      s.subscribe(
        d => {
          //   timelines[i].next(d);
          // console.log(timelines[i]);
        },
        function(e) {
          timelines[i].error(e);
        },
        function() {
          timelines[i].completed();
        }
      );
    });

    // var TLC = TimelineCanvas;
    // TLD = TimelineDOM;
    // var timelines = [new TLC("TimelineCanvas"), new TLC("TimelineCanvas")];
    // var source = Rx.Observable.create(function(observer) {
    //   var i = 10;
    //   var timer = setInterval(function() {
    //     observer.next(i--);
    //     if (i < 0) {
    //       observer.onCompleted();
    //       clearInterval(timer);
    //     }
    //   }, 1000);
    // });
    // source.subscribe(
    //   function(x) {
    //     timelines[0].next(x);
    //     timelines[1].next(x);
    //   },
    //   function(err) {
    //     timelines[0].error(err);
    //     timelines[1].error(err);
    //   },
    //   function() {
    //     timelines[0].completed();
    //     timelines[1].completed();
    //   }
    // );
  }
};
</script>

<style>
#rxClock {
  font-size: 22px;
  color: aqua;
}
</style>
