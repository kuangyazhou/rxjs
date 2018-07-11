<template>
  <div>async await</div>
</template>

<script>
import axios from "axios";

export default {
    name: "await",
    data() {
        return {
            message: ""
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        async req() {
            setTimeout(() => {
                console.log(1);
                return 1;
            }, 2000);
        },
        async load() {
            let data = await this.req();
            console.log(data);
        }
    }
};
</script>

