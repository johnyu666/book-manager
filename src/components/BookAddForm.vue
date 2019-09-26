<template>
    <div id="book-form">
        <form @submit.prevent="addBook">
            <input type="text" placeholder="book name" ref="name" value="JavaScript设计模式">
            <input type="number" min="0" step="0.5" placeholder="book price" ref="price" value="50">
            <input type="number" min="0" step="1" placeholder="book  number" ref="count" value="2">
            <button>添加一本书</button>
        </form>
    </div>
</template>

<script>
    import store from "../store";
    export default {
        name: "BookAddForm",
        data:function(){
            return store;
        },
        methods:{
            addBook(){
                store.commit('addBook',{name:this.$refs.name.value,price:this.$refs.price.value,count:this.$refs.count.value})
            }
        }
    }
</script>

<style scoped>

</style>