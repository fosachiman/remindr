//when a category is pulled in, it should have the category listed in the element

//ADD

let input = document.querySelector('#add-text');
let button = document.querySelector('#add-button');
button.addEventListener('click', addClickHandler);

function addClickHandler() {
  let newThing = document.createElement('p');
  let list = document.querySelector('#list');
  list.appendChild(newThing);
  newThing.innerHTML = input.value;
  newThing.setAttribute('style', 'background-color: green');
}


//DELETE
let item = document.querySelector('#Shaun-of-the-Dead');

let checkbox= document.querySelector('#delete-button');

checkbox.addEventListener('click', deleteClickHandler);

function deleteClickHandler() {
  if (item.style.textDecoration === 'line-through')
   item.style = '';
  else
    item.style.textDecoration = 'line-through';
}

