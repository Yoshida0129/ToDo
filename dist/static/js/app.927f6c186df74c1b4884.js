webpackJsonp([1],{M93x:function(t,e,n){"use strict";var s=n("xJD8"),i=n.n(s),a=n("f0Nd");var o=function(t){n("mqum")},c=n("VU/8")(i.a,a.a,!1,o,null,null);e.default=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("/5sW"),i=n("M93x"),a=n("/ocq"),o=n("mvHQ"),c=n.n(o),l=n("DAYN"),r={name:"todo",data:function(){return{newItemTitle:"",items:[]}},mounted:function(){this.items=JSON.parse(localStorage.getItem("items"))||[]},components:{draggable:n.n(l).a},methods:{saveItem:function(){localStorage.setItem("items",c()(this.items))},addTodo:function(t){""!=t&&(this.items.push({select:!1,title:t,status:"Todo"}),this.newItemTitle="",this.saveItem())},changeTodo:function(t){for(var e=this.items.filter(function(t){return!0===t.select}),n=0;n<e.length;n++)e[n].status=t,e[n].select=!1;this.saveItem()},removeTodo:function(){this.items=this.items.filter(function(t){return!1===t.select}),this.saveItem()},allClear:function(t){this.items.splice(t),this.saveItem()},sort:function(t){this.items.sort(function(e,n){return e[t]>n[t]?-1:1}),this.saveItem()}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todo"}},[n("h1",[t._v("Todo-list")]),t._v(" "),n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItemTitle,expression:"newItemTitle"}],attrs:{type:"text",name:"addText",value:"a"},domProps:{value:t.newItemTitle},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.addTodo(t.newItemTitle)},input:function(e){e.target.composing||(t.newItemTitle=e.target.value)}}}),t._v(" "),n("div",{staticClass:"command"},[n("input",{attrs:{type:"button",value:"AllClear"},on:{click:function(e){t.allClear()}}}),t._v(" "),n("input",{attrs:{type:"button",value:"SelectRemove"},on:{click:function(e){t.removeTodo()}}}),t._v(" "),n("br"),t._v(" "),n("div",[n("input",{attrs:{type:"button",value:"Complated!"},on:{click:function(e){t.changeTodo("Complated!")}}}),t._v(" "),n("input",{attrs:{type:"button",value:"Running"},on:{click:function(e){t.changeTodo("Running")}}}),t._v(" "),n("input",{attrs:{type:"button",value:"Todo"},on:{click:function(e){t.changeTodo("Todo")}}})])])]),t._v(" "),n("table",{staticClass:"todoList"},[n("thead",[n("tr",[n("th",{staticClass:"select",on:{click:function(e){t.sort("select")}}},[t._v("Select")]),t._v(" "),n("th",{staticClass:"name",on:{click:function(e){t.sort("title")}}},[t._v("Name")]),t._v(" "),n("th",{staticClass:"status",on:{click:function(e){t.sort("status")}}},[t._v("Status")])])]),t._v(" "),n("draggable",{attrs:{element:"tbody"},model:{value:t.items,callback:function(e){t.items=e},expression:"items"}},t._l(t.items,function(e,s){return n("tr",{key:s,staticClass:"record"},[n("td",{staticClass:"select"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"item.select"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.select)?t._i(e.select,null)>-1:e.select},on:{change:function(n){var s=e.select,i=n.target,a=!!i.checked;if(Array.isArray(s)){var o=t._i(s,null);i.checked?o<0&&t.$set(e,"select",s.concat([null])):o>-1&&t.$set(e,"select",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(e,"select",a)}}})])]),t._v(" "),n("td",{staticClass:"name"},[t._v(t._s(e.title))]),t._v(" "),n("td",{staticClass:"status"},[t._v(t._s(e.status))])])}))],1)])},staticRenderFns:[]};var m=n("VU/8")(r,u,!1,function(t){n("u3Oj")},null,null).exports;s.a.use(a.a);var d=new a.a({routes:[{path:"/",name:"todo",component:m}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:d,render:function(t){return t(i.default)}})},f0Nd:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("input",{staticClass:"menuBar",attrs:{type:"button",value:"aaa"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};e.a=s},mqum:function(t,e){},u3Oj:function(t,e){},xJD8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.927f6c186df74c1b4884.js.map