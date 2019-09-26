import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let maxId=0;
export default new Vuex.Store({
  state: {
    currentBook:null,
    books:[{id:++maxId,name:'JavaScript:The good parts',price:28.5,count:3,
      img:'https://img13.360buyimg.com/n1/s200x200_g13/M02/04/0E/rBEhVFHbZw0IAAAAAALFxgN_LSsAAA3fgLESAwAAsXe559.jpg'},
      {id:++maxId,name:'Professinal Javascript for web developers',price:89,count:10,
        img:'https://img12.360buyimg.com/n1/s200x200_jfs/t18991/220/897182682/82442/2b56b48/5ab1dbeeN41b1af99.jpg'},
      {id:++maxId,name:'Javascript:The Definitive Guide',price:111.2,count:5,
        img:'https://img11.360buyimg.com/n1/s200x200_jfs/t2047/63/2033152973/398005/5ea9044e/56ea5e6aN38c0f2b8.jpg'}
    ]
  },
  mutations: {
      addBook:(state,book)=>state.books.push(Object.assign({id:++maxId},book)),
      deleteBook:(state,book)=>{
        let index=state.books.findIndex(b=>b.id===book.id);
        state.books.splice(index,1)
      },
      toggleBookDetail:(state,book)=>{
          if(state.currentBook!==book) state.currentBook=book;
          else state.currentBook=null;
      }
  },
  actions: {

  }
})
