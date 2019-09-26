<template>
    <div>
        <button @click="store.state.currentBook=null">隐藏</button>

        <img :src="store.state.currentBook.img" alt="">
        <h3>id: {{store.state.currentBook.id}}</h3>
        <h3>name: {{store.state.currentBook.name}}</h3>
        <h3>price: {{store.state.currentBook.price}}</h3>
        <h3>count: {{store.state.currentBook.count}}</h3>
    </div>
</template>

<script>
    import store from "../store";
    export default {
        name: "BookDetail",
        data:function () {
            return {store}
        }
    }
</script>

<style scoped>

</style>