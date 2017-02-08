
let button = document.querySelectorAll('.add-button');
button.forEach((button) => {
  button.addEventListener('click', addClickHandler);
})

let trashButton = document.querySelectorAll('.delete-button');
trashButton.forEach((button) => {
  button.addEventListener('click', trashItem);
})
let listItem = document.querySelectorAll('.list-item');
listItem.forEach((item) => {
  item.addEventListener('change', addSubmitButton);
})




function addClickHandler(e) {
  //GOING DEEP INTO THE EVENT OBJECT lol
  // console.log(e.srcElement.attributes.category.textContent)

  let newThing = document.createElement('div');
  let list = document.querySelectorAll('.item-list');
  let addBox = document.querySelectorAll('.add-item-text')
  list.forEach((list) => {
    if (list.getAttribute('category') === e.srcElement.attributes.category.textContent){
      console.log(list.getAttribute('category'))
      list.appendChild(newThing);
    }
  })
  let newItem = document.createElement('input');

  // newThing.setAttribute('category', newThing.parentElement.category)
  newItem.setAttribute('class', 'newItem col s10 list-item');
  newItem.setAttribute('type', 'text');
  newItem.setAttribute('name', 'item');
  addBox.forEach((addBox) => {
    if (addBox.getAttribute('category') === e.srcElement.attributes.category.textContent)
      newItem.setAttribute('value', addBox.value);
  })
  let trash = document.createElement('i');
  trash.setAttribute('class', 'material-icons col s1 delete-button');
  trash.setAttribute('id', 'delete-button');
  trash.innerHTML = 'delete';
  let desc = document.createElement('i');
  desc.setAttribute('class', 'material-icons col s1 desc-button');
  desc.setAttribute('id', 'desc-button');
  desc.innerHTML = 'info';
  newThing.appendChild(newItem);
  newThing.appendChild(trash);
  newThing.appendChild(desc);
  trash.addEventListener('click', trashItem);
  resetAddBox(e);
  addSubmitButton(e);
}

function resetAddBox(e) {
  let addBox = document.querySelectorAll('.add-item-text');
  addBox.forEach((addBox) => {
    if (addBox.category === e.target.category)
      addBox.value = '';
  })

}

function trashItem(e) {
  let parent = e.target.parentElement;
  $(parent).remove();
  addSubmitButton();
}

function addSubmitButton(e) {
  let submitButtonCont = document.querySelectorAll('.sub-button-cont');
  submitButtonCont.forEach((sbc) => {
    sbc.setAttribute('style', 'display: block');
  })
}

