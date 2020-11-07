/*build: https://babeljs.io*/
var todolist 

function _renderReact() {
    console.log('_renderReact')
    todolist = JSON.parse(localStorage.getItem('todolist'))
    if(todolist != null) {}else todolist = [] 
    ReactDOM.render(
        <Todolist />,
        document.getElementById('root')
    );
} 
_renderReact()

function _update(event, key_1, key_2) {
    console.log('not wỏkinh')
    console.log(event)
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();

        if(!key_2) { // only key1
            todolist[key_1].content = document.getElementById('header' + key_1).innerText
        }

        if(key_2) {
            todolist[key_1].list_task[key_2] = document.getElementById('item' + key_1 + key_2).innerText
        }

        localStorage.setItem('todolist', JSON.stringify(todolist));
        _renderReact()
    }
}

function _remove(key_1, key_2) {
    if(!key_2) {
        todolist.splice(key_1, 1) 
    }

    if(key_2) {
        todolist[key_1].list_task.splice(key_2, 1) 
    }

    localStorage.setItem('todolist', JSON.stringify(todolist));
    _renderReact()
}

function Add(props) {
    let index  = props.index
    let [showResults, setShowResults] = React.useState(false)
    let show = () => setShowResults(true)
    let hide = () => setShowResults(false)

    function actionAdd(event) {
        if (event.keyCode === 13 || event == 'add') {
            // Cancel the default action, if needed
            event.keyCode === 13 ? event.preventDefault() : ''

            console.log(index)
            let el = document.querySelector('#add' + index)
            let content = el.innerText.trim()

            if(content != "") {
                if(index != undefined) {
                    todolist[index].list_task.push(content)
                }

                if(index == undefined) {
                    todolist.push({content: content, list_task: []})
                }
                // id: '_' + Math.random().toString(36).substr(2, 9),

                hide()
                el.innerText = ""
                localStorage.setItem('todolist', JSON.stringify(todolist));
                _renderReact()
            }
        }
    }


    return (
        showResults ?
        <div class="form-add-task">
            <div class="box-input box-input-text" id={"add" + index} autofocus='true' onKeyDown={(event) => actionAdd( event )}></div>
            <div class="board-actions-add-task flex-ver">
                <div class="btn " onClick={() => actionAdd('add')}>
                    Add {index ? 'section': 'task'}
                </div>
                <div class="btn-cancel" onClick={hide}>
                    Cancel
                </div>
            </div>
        </div>
        :
        <div className={"button-add-task " + (index == undefined ? 'add-section': '')} onClick={show}>
            <span class="icon-sum">+</span> Add {index == undefined ? 'section': 'task'} 
        </div>
    )
}

// Code react
function Todolist(props) {
    return (
        <div class="app">
            <div class="nested-sortable todolist" data-level="1"> { 
                todolist.map((value, key) =>
                    <section class="board-section" key={'section' + key} data-key={key}>
                        <header>
                            <span class="content box-input-text" onKeyDown={(event) => _update( event, key )} id={'header' + key}>{value.content}</span>
                            <span class="delete" onClick={() => _remove(key)}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><line x1="8.5" x2="39.5" y1="8.5" y2="39.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" class="line"/><line class="line" x1="39.5" x2="8.5" y1="8.5" y2="39.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/></svg></span>
                        </header>
                        <div class="board-task-list nested-sortable" data-level="2" data-key={key}> {   
                            value.list_task.map((_value, index) =>
                                <div class="list-task" key={'item' + index}>
                                    <span id={ 'item' + key + index } class="content box-input-text" onKeyDown={event => _update( event, key, index )}>{_value}</span>
                                    <span class="delete" onClick={() => _remove(key, index)}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><line x1="8.5" x2="39.5" y1="8.5" y2="39.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" class="line"/><line class="line" x1="39.5" x2="8.5" y1="8.5" y2="39.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/></svg></span>
                                </div> 
                            ) }
                        </div>
                
                        <Add index={key} />
                    </section>
                )
                }
            </div>
            
            <div class="board-view-seation">
                <section class="board-section" id='section-new'>
                    <Add/>
                </section>
            </div>
        </div>
    )
}

// Nested demo
var nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));

// Loop through each nested sortable element
for (var i = 0; i < nestedSortables.length; i++) {
    var group = 'nested-' + nestedSortables[i].dataset.level
    // nested-child
	new Sortable(nestedSortables[i], {
		group: group,
		animation: 150,
		fallbackOnBody: true,
        swapThreshold: 0.65,
        onEnd: (/**Event*/ evt) => {
            var itemEl = evt.item; // dragged HTMLElement

            // Th3 
            if(itemEl.localName == "section") {
                todolist.splice(evt.newIndex, 0, todolist.splice(evt.oldIndex, 1)[0])
            }

            if(itemEl.localName != "section") {
                let _to  = evt.to.dataset.key

                if(evt.pullMode == true) { // another sortable
                    let _from= evt.from.dataset.key
 
                    todolist[_to].list_task.splice(evt.newIndex, 0, todolist[_from].list_task.splice(evt.oldIndex, 1)[0])
                } else {
                    todolist[_to].list_task.splice(evt.newIndex, 0, todolist[_to].list_task.splice(evt.oldIndex, 1)[0])
                }
            }

            localStorage.setItem('todolist', JSON.stringify(todolist));

            todolist = JSON.parse(localStorage.getItem('todolist'))
            ReactDOM.render(
                <Todolist />,
                document.getElementById('root')
            );
        },
	});
}