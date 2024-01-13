const add = document.getElementById('addTodo');
const input = document.getElementById('inputField');
const toDoContainer = document.getElementById('toDoContainer');

add.addEventListener('click', addItem);
input.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        addItem();
      }
})

function addItem(event){
    const item_value = input.value;
    // console.log(item_value)
    const item = document.createElement('div');
    item.classList.add('item')

    const item_content = document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);

    const input_item = document.createElement('input');
    input_item.classList.add('text');
    input_item.type = 'text';
    input_item.value = item_value;
    input_item.setAttribute('readonly','readonly');
    input_item.addEventListener('dblclick',function(){
        input_item.style.textDecoration = 'line-through';
    })
    item_content.appendChild(input_item);
    
    const item_action = document.createElement('div');
    item_action.classList.add('action');
    
    const edit_item = document.createElement('button');
    edit_item.classList.add('edit','btn','btn-success');
    edit_item.type = 'button';
    edit_item.innerText = 'Edit';

    const delete_item = document.createElement('button');
    delete_item.classList.add('delete','btn','btn-danger','fa','fa-trash');
    item_action.appendChild(edit_item);
    item_action.appendChild(delete_item);

    item.appendChild(item_action)
    // adding item to toDoContainer
    toDoContainer.appendChild(item);

    input.value = '';

    // adding functionality to edit button
    edit_item.addEventListener('click',(event) =>{
        if (edit_item.innerText.toLowerCase() == 'edit'){
            edit_item.innerText = 'save';
            input_item.removeAttribute('readonly');
            input_item.focus();  
        }else{
            edit_item.innerText = 'Edit';
            input_item.setAttribute('readonly','readonly');
        }
    })

    delete_item.addEventListener('click',(event) =>{
          toDoContainer.removeChild(item);
    })

}
