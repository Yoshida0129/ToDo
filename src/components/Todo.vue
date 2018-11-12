<template>
  <div id='todo'>
    <div class='container'>
      <input type="text" v-model="newItemTitle" v-on:keyup.enter='addTodo(newItemTitle)' name='addText' value='a'/>
      <div class='command'>
        <input type="button" v-on:click='allClear()' value="AllClear">
        <input type="button" v-on:click='removeTodo()' value=selectRemove>
        <br>
        <div>
          <input type="button" v-on:click='changeTodo("Complated!")' value="Complated!">
          <input type="button" v-on:click='changeTodo("Running")' value="Running">
          <input type="button" v-on:click='changeTodo("Todo")' value="Todo">
        </div>
      </div>
    </div>
    <table class='todoList'>
      <tr>
        <th class='select'>Select</th>
        <th class='name'>Name</th>
        <th class='status'><input type="button" v-on:click='sort("status")' value='Status'></th>
      </tr>
      <tr v-for="(item) in items" :key='item.title' class='record'>
        <td class='select'>
          <label>
            <input type='checkbox' v-model=item.select>
          </label>
        </td>
        <td class='name'>
          {{ item.title }}
        </td>
        <td class='status'>
          {{item.status}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
export default{
  name: 'todo',
  data: () => {
    return {
      newItemTitle: '',
      items:[]
    }
  },
  mounted() {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
  },
  methods: {
    saveItem: function(){
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    addTodo: function(newTitle){
      if(newTitle != ''){
      this.items.push(
          { select:false, title: newTitle, status:'Todo' }
        );
      this.newItemTitle = '';
      this.saveItem();
      }
    },
    changeTodo: function(text){
      var isChecked = this.items.filter(function(item){
        return item.select === true;
      })
      for(var i=0;i<isChecked.length;i++){
        isChecked[i].status = text;
        isChecked[i].select = false;
      }
      this.saveItem();
    },
    removeTodo: function(){
      this.items = this.items.filter(function(item){
        return item.select === false;
      })
      this.saveItem();
    },
    allClear:function(index){
      this.items.splice(index);
      this.saveItem();
    },
    sort:function(column){
      this.items.sort(function(a,b){
        return (a.status > b.status) ? -1:1;
      });
      this.saveItem();
    }
  }
}
</script>

<style lang='scss'>
@mixin button-init(){
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button, input, select, textarea {
font-family :inherit;
font-size :100%;
font-weight :inherit; 
}
.container{
  margin-bottom: 5%;
  input[type="text"]{
    margin:1% 0 2% 0;
  }
  input[type="button"]{
    width:10%;
    margin:0.5%;
    box-shadow: 0.5% 0.1% #CCC;
  }
}
#todo{
  display: flex;
  flex-direction: column;
  .todoList{
    margin:0 5%;
    .select{
      width:20%;
      label{
        display: block;
      }
      td input{
        @include button-init();
      }      
    }
    .name{
      input{
        @include button-init();
      }
      width: 40%;
    }
    .status{
      input{
        @include button-init();
      }      
      width: 20%;
    }
    .record{
      :hover{
        background-color: #EEE;
      }
    }
    th{
      padding: 10px;
      border-bottom:solid 2px #CCC;
    }
    td{
      padding: 5px;      
      border-bottom:solid 1px #CCC;
    }
  }
}
</style>
