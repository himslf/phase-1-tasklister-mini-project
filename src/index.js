document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector("form");
  form.addEventListener("submit", (q)=> {
    q.preventDefault();
    buildListItem(form.querySelector("#new-task-description").value);
    form.reset();
  });
});

function buildListItem(thing) {
  let listItem = document.createElement('li');
  let btn = document.createElement('button');

  btn.addEventListener('click',deleteItem);
  btn.textContent = 'DELETE';
  listItem.textContent = `${thing} `;
  listItem.appendChild(btn);
  document.querySelector('#tasks').appendChild(listItem);
};

function deleteItem(q) {
  q.target.parentNode.remove();
};

function clearEverything() {
  let list = document.querySelector('ul');
  list.removeChild(list.firstElementChild);
};