//when a category is pulled in, it should have the category listed in the element

//ADD

let input = document.querySelector('#add-item-text');
let button = document.querySelector('#add-button');
button.addEventListener('click', addClickHandler);

function addClickHandler() {
  let newThing = document.createElement('div');
  let list = document.querySelector('#item-list');
  let addBox = document.querySelector('#add-item-text')
  // let parent = list.parentElement;
  list.appendChild(newThing);
  let newItem = document.createElement('input');
  newItem.setAttribute('class', 'newItem col s10 list-item');
  newItem.setAttribute('type', 'text');
  newItem.setAttribute('name', 'item');
  newItem.setAttribute('value', addBox.value);
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
  newThing.setAttribute('style', 'background-color: green');
  resetAddBox();
}

function resetAddBox() {
  let addBox = document.querySelector('#add-item-text');
  addBox.value = '';
}


//DELETE
let item = document.querySelector('#Shaun-of-the-Dead');

let checkbox= document.querySelector('#delete-button');

checkbox.addEventListener('click', deleteClickHandler);

function deleteClickHandler(e) {
  e.preventDefault;
  if (item.style.textDecoration === 'line-through')
   item.style = '';
  else
    item.style.textDecoration = 'line-through';
}

// <ul class="collapsible box-thing" data-collapsible="accordion">
//     <% categories.forEach((category) => {%>
//     <li category="<%= category.dataValues.category %>" id="<%= category.dataValues.category %>">
//       <div class="collapsible-header category-item"><%= category.dataValues.category %></div>
//       <div class="collapsible-body row">
//       <input id="add-item-text" type="text" placeholder="add a thing" class="add-field input-field col s10">
//       <div class="col s2 add-button-cont">
//        <a id="add-button" class="btn-floating btn-large waves-effect waves-light add-button"><i class="material-icons">add</i></a>
//        </div>
//       <form action="<%='/users/' + user.dataValues.id +'/' + category.dataValues.category %>" method="post">
//         <ul id="item-list" class="<%= category.dataValues.category %> newItemField" tether="<%= category.dataValues.category %>">
//           <% items.forEach((item) => { %>
//           <% if (item.dataValues.category === category.dataValues.category && item.dataValues.name !== '') { %>
//             <div>
//               <input type="text" name="item" class="newItem col s10 list-item" id="<%= item.dataValues.name %>_input" value="<%= item.dataValues.name %>">
//               <i class="material-icons col s1 delete-button" id="delete-button">delete</i>
//               <i class="material-icons col s1 desc-button" id="desc-button">info</i>
//             </div>
//           <%  } }) %>
//           <!-- <button class="btn waves-effect waves-light" type="submit" name="action">Save
//             <i class="material-icons right">send</i>
//           </button> -->
//         </form>
//         </ul>
//       </div>
//     </li>
//     <% }) %>
// </ul>

// item description

