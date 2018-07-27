<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    },
    methods: {
        fuck() {
            // 代码1
            function People() {}
            var p = new People();
            p.__proto__ === People.prototype;
            People.__proto__ === Function.prototype;
            People.prototype.__proto__ === Object.prototype;
            //代码2
            Function.prototype === Function.__proto__;
            Function.prototype === Object.__proto__;
            Function.prototype.__proto__ === Object.prototype;
            Function instanceof Object;
            //代码3
            Object instanceof Function;
            Function instanceof Object;
            Function instanceof Function;
            Object instanceof Object;
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
