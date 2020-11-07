"use strict";let todolist;function _renderReact(){!(todolist=JSON.parse(localStorage.getItem("todolist")))&&(todolist=[]),ReactDOM.render(React.createElement(Todolist,null),document.getElementById("root"))}function _update(e,t,l){13===e.keyCode&&(e.preventDefault(),l||(todolist[t].content=document.getElementById("header"+t).innerText),l&&(todolist[t].list_task[l]=document.getElementById("item"+l).innerText),localStorage.setItem("todolist",JSON.stringify(todolist)),_renderReact())}function _remove(e,t){t||todolist.splice(e,1),t&&todolist[e].list_task.splice(t,1),localStorage.setItem("todolist",JSON.stringify(todolist)),_renderReact()}function Add(e){let t=e.index,[l,a]=React.useState(!1),o=()=>a(!1);function s(e){if(13===e.keyCode||"add"==e){13===e.keyCode&&e.preventDefault(),console.log(t);let l=document.querySelector("#add"+t),a=l.innerText.trim();""!=a&&(null!=t&&todolist[t].list_task.push(a),null==t&&todolist.push({content:a,list_task:[]}),o(),l.innerText="",localStorage.setItem("todolist",JSON.stringify(todolist)),_renderReact())}}return l?React.createElement("div",{class:"form-add-task"},React.createElement("div",{class:"box-input box-input-text",id:"add"+t,autofocus:"true",onKeyDown:e=>s(e)}),React.createElement("div",{class:"board-actions-add-task flex-ver"},React.createElement("div",{class:"btn ",onClick:()=>s("add")},"Add ",t?"section":"task"),React.createElement("div",{class:"btn-cancel",onClick:o},"Cancel"))):React.createElement("div",{className:"button-add-task "+(null==t?"add-section":""),onClick:()=>a(!0)},React.createElement("span",{class:"icon-sum"},"+")," Add ",null==t?"section":"task")}function Todolist(e){return React.createElement("div",{class:"app"},React.createElement("div",{class:"nested-sortable todolist","data-level":"1"}," ",todolist.map((e,t)=>React.createElement("section",{class:"board-section",key:"section"+t,"data-key":t},React.createElement("header",null,React.createElement("span",{class:"content box-input-text",onKeyDown:e=>_update(e,t),id:"header"+t},e.content),React.createElement("span",{class:"delete",onClick:()=>_remove(t)},React.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"24px",height:"24px"},React.createElement("line",{x1:"8.5",x2:"39.5",y1:"8.5",y2:"39.5",fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"4",class:"line"}),React.createElement("line",{class:"line",x1:"39.5",x2:"8.5",y1:"8.5",y2:"39.5",fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"4"})))),React.createElement("div",{class:"board-task-list nested-sortable","data-level":"2","data-key":t}," ",e.list_task.map((e,l)=>React.createElement("div",{class:"list-task",key:"item"+l},React.createElement("span",{id:"item"+l,class:"content box-input-text",onKeyDown:e=>_update(e,t,l)},e),React.createElement("span",{class:"delete",onClick:()=>_remove(t,l)},React.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"24px",height:"24px"},React.createElement("line",{x1:"8.5",x2:"39.5",y1:"8.5",y2:"39.5",fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"4",class:"line"}),React.createElement("line",{class:"line",x1:"39.5",x2:"8.5",y1:"8.5",y2:"39.5",fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"4"})))))),React.createElement(Add,{index:t})))),React.createElement("div",{class:"board-view-seation"},React.createElement("section",{class:"board-section",id:"section-new"},React.createElement(Add,null))))}_renderReact();for(var nestedSortables=[].slice.call(document.querySelectorAll(".nested-sortable")),i=0;i<nestedSortables.length;i++){var group="nested-"+nestedSortables[i].dataset.level;new Sortable(nestedSortables[i],{group:group,animation:150,fallbackOnBody:!0,swapThreshold:.65,onEnd:function(e){var t=e.item;if("section"==t.localName&&todolist.splice(e.newIndex,0,todolist.splice(e.oldIndex,1)[0]),"section"!=t.localName){let t=e.to.dataset.key;if(1==e.pullMode){let l=e.from.dataset.key;todolist[t].list_task.splice(e.newIndex,0,todolist[l].list_task.splice(e.oldIndex,1)[0])}else todolist[t].list_task.splice(e.newIndex,0,todolist[t].list_task.splice(e.oldIndex,1)[0])}localStorage.setItem("todolist",JSON.stringify(todolist))}})}