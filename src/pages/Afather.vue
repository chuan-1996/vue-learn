<template>
  <div id="app">
    <child :message="message"></child>
  </div>
</template>

<script>
    import child from "@/pages/Achildren";
    export default {
        name: "app",
        components: {child },
        data() {
            return {
                message:{
                    age:13,
                }
            };
        },
        mounted(){
            // 模拟异步请求
            setTimeout( () => this.message.age = 14,5000)
        }
    };
</script>
