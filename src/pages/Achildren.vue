<template>
  <div>{{age}}</div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props: ["message"],
        data() {
            return {
                age: null,
            };
        },
        mounted(){
            this.age=this.message.age;
            // 在子组件中异步请求也可以，但是在父组件中异步请求获取数据，然后进行传值可以实现值对不同子组件的复用！
            // setTimeout( () => this.age = 18,5000)
        },
        watch: {
            message: {
                deep: true,
                handler(nv, ov) {
                    this.age = nv.age;
                    console.log(nv,ov);
                }
            }
        },

    };
</script>
