const submitBtn = document.querySelector('.btn-1');
const item = document.querySelector('#item');
const clearBtn = document.querySelector('.btn-2');
const todos = document.querySelector('.todos');

// add event listeners
submitBtn.addEventListener('click', onSubmit);

// check if field is empty
function onSubmit(e) {
  clearBtn.addEventListener('click', clearList);
  e.preventDefault();

  if (item.value === '') {
    item.style.border = '2px solid red';
    item.placeholder = 'Enter an item!';

    setTimeout(() => (item.style.border = ''), 2000);
    setTimeout(() => (item.placeholder = 'Add an item!'), 2000);
  }

  //add item to todo list
  else {
    const li = document.createElement('li');
    li.className = 'li';
    li.append(item.value);
    todos.appendChild(li);

    // create a delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'del-btn';
    delBtn.appendChild(document.createTextNode('X'));

    //append btn to the todo list
    li.append(delBtn);

    //delete each item
    delBtn.addEventListener('click', () => {
      todos.removeChild(li);
    });

    //clear feild
    item.value = '';

    //clear all todos
    function clearList(e) {
      todos.removeChild(li);
    }
  }
}
