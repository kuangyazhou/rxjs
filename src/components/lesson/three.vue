<template>
  <div>
      <div class="ez-led" id="clock">00:00:00</div>
      <h1>text</h1>
  </div>
</template>
<script>
import Rx from "rxjs/Rx";
import { Observable, Observer, Subject } from "rxjs";
import TimelineCanvas from "timeline";
export default {
  mounted() {
    var elClock = document.getElementById("clock");
    var getTime = function() {
      var _ = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"], //补零
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
      return [_[h] || h, _[m] || m, _[s] || s].join(":");
    };
    setInterval(function() {
      elClock.textContent = getTime();
    }, 1000);

    var TL = TimelineCanvas;
    var tl_input = new TL("input");
    // var tx = new Placeholder("filter()");
    var tl_output = new TL("output");
    var timelines = [tl_input, tl_output];
    var input = Rx.Observable.timer(0, 1000);
    var output = input.filter(function(d) {
      return d % 2 === 0;
    });
    [input, output].forEach(function(s, i) {
      s.subscribe(
        function(d) {
          //   timelines[i].next(d);
        },
        function(e) {
          //   timelines[i].error(e);
        },
        function() {
          //   timelines[i].completed();
        }
      );
    });
  }
};
</script>
<style>
h1 {
  text-align: center;
  font-family: Consolas;
}

.ez-led{
  font-family : "LED";
  font-size : 40px;
  background : #70d355;
  width: 300px;
  height:60px;
  line-height : 60px;
  text-align : right;
  padding : 10px;
  letter-spacing:5px;
}
</style>
