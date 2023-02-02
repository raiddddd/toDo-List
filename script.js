// Declaring the variables I am working with

const formAdd = document.querySelector('.addATask');
const list=document.querySelector('ul');
const formSearch = document.querySelector('.searchTask input');
let checkBtn = document.querySelectorAll('.checkbox');
let spans=document.querySelectorAll('span');


// Creating a function that generates the inner html for list
const generateList = todo => {
  const html=`<li>
  <span>${todo}</span>
  <div class="flex">
  <input class="checkbox" type="checkbox" name="checkbox">
  <button class="delete">Del</button>
  </div>
    </li>`;
    list.innerHTML+=html;
  };
  
  
  // Creating the event listener + the algorithm for adding to the list
  formAdd.addEventListener('submit', e => {
    e.preventDefault();
    const todo = formAdd.add.value.trim();
    if(todo.length) {
    generateList(todo);
    formAdd.reset();
    retrive();
  }
})


// Delete something from the list
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
})

//Function to take the list and compare to the key words/letters
const filterList = (term) => {
  Array.from(list.children)
  .filter((todo) =>
    !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>
      todo.classList.add('hide'));

  Array.from(list.children)
  .filter((todo) =>
    todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>
      todo.classList.remove('hide'));
}

//Looking for a certain task by a key word or letter
formSearch.addEventListener('keyup',  () => {
  const term=formSearch.value.trim().toLowerCase();
  filterList(term);
})

//Strike the text when the checkbox is checked
// A function that goes through all the spans and checkboxes whenever a new one is creater and attach an event listener to them.
// The event listener makes that the checked checkbox make a line through the item it belongs to (For when you have a list with an item already done, but you don't wanna delete it yet).
// This function is then put into the event listener that creates and adds a new item in the list

function retrive () {
  checkBtn = document.querySelectorAll('.checkbox');
  spans=document.querySelectorAll('span');
  checkBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
      if(element.checked) {
        spans[index].style.textDecoration ="line-through";
        spans[index].style.textDecorationThickness="3px";
      } else {
        spans[index].style.textDecoration="none";
      }
    })
  })
}

