<template>
  <div id='todo'>
    <input type="text" v-model="newItemTitle" v-on:keyup.enter='addTodo(newItemTitle)'/>
    <input type="button" v-on:click='allClear()' value="AllClear">
    <input type="button" v-on:click='removeTodo()' value=selectRemove><br>
    <div>
      <input type="button" v-on:click='changeTodo("Complated!")' value="Complated!">
      <input type="button" v-on:click='changeTodo("In progress")' value="In progress">
      <input type="button" v-on:click='changeTodo("Icebox")' value="Icebox">
      <input type="button" v-on:click='changeTodo("Todo")' value="Todo">
    </div>
    <form name='todo-list'>
      <tr>
        <th>select</th>
        <th>name</th>
        <th>status</th>
      </tr>
      <tr v-for="(item) in items" :key='item.title'>
        <td><input type='checkbox' v-model=item.select></td>
        <td>
          <label>
            {{ item.title }}
          </label>
        </td>
        <td>
          {{item.status}}
        </td>
      </tr>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default{
  name: 'todo',
  data: () => {
    return {
      newItemTitle: '',
      items: [
        {select:true, title: '領収書を準備する', status: 'Complated!'  },
        {select:false, title: 'ピザを注文する', status: 'Icebox' }
        ]
      }
    },
  methods: {
    addTodo: function(newTitle){
      if(newTitle!=''){
      this.items.push(
        { select:false, title: newTitle, status:'Todo' }
        );
      this.newItemTitle = '';
      }
    },
    changeTodo: function(text){
      var a = this.items.filter(function(item){
        return item.select === true;
      })
      for(var i=0;i<a.length;i++){
        a[i].status = text;
      }
    },
    removeTodo: function(){
      this.items = this.items.filter(function(item){
        return item.select === false;
      })
    },
    allClear:function(index){
      this.items.splice(index);
    }
  }
}
</script>

<style lang='scss'>
  .todo-list{
    li{
      list-style:none;
    }
  }
</style>
