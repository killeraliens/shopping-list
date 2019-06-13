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


handleInput();

