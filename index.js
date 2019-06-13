console.log('hey');

function handleInput() {
  const itemForm = $('#js-shopping-list-form');
  itemForm.on('submit', function (e) {
    e.preventDefault();
    const inputField = $(this).find('#shopping-list-entry');
    const userInput = inputField.val();
    const listContainer = $('ul.shopping-list');

    listContainer.prepend(`<li>
      <span class="shopping-item">${userInput}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);

    inputField.val('');
  });
}

function handleCheck() {
  const listContainer = $('ul.shopping-list');
  listContainer.on('click', 'button.shopping-item-toggle', function (e) {
    const liParent = $(this).parents('li');
    const spanItemTxt = $(liParent).find('span.shopping-item');
    spanItemTxt.toggleClass('shopping-item__checked');
  });
}

function handleDelete() {
  const listContainer = $('ul.shopping-list');
  listContainer.on('click', 'button.shopping-item-delete', function (e) {
    const liParent = $(this).parents('li');
    liParent.remove();
  });
}

handleDelete();
handleCheck();
handleInput();

