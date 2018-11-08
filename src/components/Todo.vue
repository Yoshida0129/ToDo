<template>
  <div id='todo'>
    <input type="text" v-model="newItemTitle" v-on:keyup.enter="addTodo(newItemTitle)"/>
    <ul class='todo-list'>
      <li v-for="item in items" :key="item">
        <button type="checkbox">
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
var vm=new Vue({
  name: 'todo',
  data: function() {
    return {
      items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'ピザを注文する', isChecked: false }
      ]
    }
  },
  methods: {
    addTodo: function(newTitle){
      this.items.push(
        { title: newTitle, isChecked: false }
        );
      this.newItemTitle = '';
    }
  }
})
</script>

<style lang='scss'>
  .todo-list{
    li{
      list-style:none;
    }
  }
</style>
