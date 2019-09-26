<template>
    <div>
        <BookAddForm></BookAddForm>
        <table>
            <tr>
                <th>编号</th>
                <th>书名</th>
                <th>价格</th>
                <th>数量</th>
                <th>删除</th>
                <th>更新</th>
            </tr>
            <tr v-for="book of store.state.books" :key="book.id">
                <td>{{book.id}}</td>
                <td><a href="#" @click.prevent="showDetail(book)">{{book.name}}</a></td>
                <td><input type="number" min="0" step="1" v-model="book.count"></td>
                <td>{{book.price}}</td>
                <td><button @click="deleteBook(book)">删除</button></td>
                <td><button @click="updateBook(book)">更新</button></td>
            </tr>
        </table>
        <hr>
        <!-- 过滤器 -->
        <h3>价格统计：<span>{{totalPrice|numformat|currency}}</span></h3>
        <hr>
        <BookDetail v-if="store.state.currentBook"></BookDetail>
    </div>
</template>

<script>
    import BookAddForm from "./BookAddForm";
    import BookDetail from "./BookDetail";
    import store from '../store';
    export default {
        name: "BookManager",
        data:function(){
            return {store}
        },
        methods:{
            deleteBook(book){
                this.store.commit("deleteBook",book);
            },
            updateBook(book){
                let price=window.prompt("修改价格",book.price)
                if(!Number.isNaN(Number.parseFloat(price))){book.price=price}
            },
            showDetail(book){
                this.store.commit('toggleBookDetail',book)
            }
        },
        computed:{
            totalPrice(){
                return this.store.state.books.reduce((v,c)=>v+=c.price*c.count,0)
            }
        },
        filters:{
            numformat: function (value) {
                return Math.round(value*100)/100
            },
            currency:function (value) {
                return "$ "+value
            }
        },
        components:{BookAddForm,BookDetail}
    }
</script>

<style scoped>
    table{
        width: 100%;
        border: 2px solid black;
        border-collapse: collapse;
    }
    tr:first-child{
        background-color: lightblue;
    }
    td,th{
        border: 1px solid gray;
    }
    tr.odd{
        background-color: lightgray;
    }
    tr.active{
        background-color: burlywood;
    }
</style>