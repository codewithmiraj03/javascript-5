const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");
const fas = document.querySelector(".edit");

// const generateTemplate = (todo) => {
//   const html = `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${todo}</span>
//       <i class="far fa-trash-alt delete"></i>
//     </li>
//   `;
//   list.innerHTML += html;
// };

function generateTemplate(todo) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    const span = document.createElement('span');
    span.textContent = todo;

    const icon = document.createElement('i');
    icon.classList.add('far', 'fa-trash-alt', 'delete');

    li.appendChild(span);
    li.appendChild(icon);

    list.appendChild(li);

    const edit = document.createElement('i');
    edit.classList.add('fas', 'fa-edit', 'edit');

    li.appendChild(span);
    li.appendChild(edit);

    list.appendChild(li);
};


function filterTodos(searchTerm) {
    // write your logic for filter todos
};

// add todos event
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todos event
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

// filter todos event
search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});



function filterTodos(searchText) {
    for (let i = 0; i < list.children.length; i++) {
        const li = list.children[i];
        if (!li.textContent.includes(searchText)) {
            li.classList.add("filtered");
        } else {
            li.classList.remove("filtered");
        }
    }
};


const inForm = document.querySelector('input[name="add"]');

const todoList = document.querySelector('.list-group');

todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('fas')) {

        const todoItem = e.target.closest('li').querySelector('span');

        inForm.value = todoItem.textContent;
    }
});



const innForm = document.querySelector('input[name="add"]');
const addBtn = document.querySelector('.btn');
const todList = document.querySelector('.todos');


todList.addEventListener('click', function (e) {

    if (e.target.classList.contains('fas')) {

        const todoItem = e.target.closest('li').querySelector('span');

        innForm.value = todoItem.textContent;


        addBtn.onclick = function (e) {
            e.preventDefault();
            if (innForm.value == '') {
                alert("Enter Text");
            } else {
                todoItem.textContent = inForm.value;
                innForm.value = '';
            }
        }
    }
});




