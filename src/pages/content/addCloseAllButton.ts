export function addCloseAllButton() {
  const headerMenuList = document.querySelector('header#page-header div.srw_header_menu ul.srw_header_menu_list');

  if (!headerMenuList) {
    return;
  }

  const closeAllListItem = document.createElement('li');
  closeAllListItem.classList.add('srw_header_menu_list_item');

  const closeAllButton = document.createElement('a');
  closeAllButton.classList.add('srw_header_menu_list_item_button');
  closeAllButton.href = '#';
  closeAllButton.id = 'srp-close-popup';
  closeAllButton.role = 'button';
  closeAllButton.tabIndex = -1000;
  closeAllButton.title = 'Close Popups';

  const closeAllButtonIcon = document.createElement('div');
  closeAllButtonIcon.classList.add('srw_header_menu_list_item_button_icon');

  const closeAllButtonIconI = document.createElement('i');
  closeAllButtonIconI.classList.add('fa', 'fa-times');

  const closeAllButtonCaption = document.createElement('span');
  closeAllButtonCaption.classList.add('ui-caption', 'srw_header_menu_list_item_button_caption');
  closeAllButtonCaption.innerText = 'Close Popups';

  closeAllButtonIcon.appendChild(closeAllButtonIconI);
  closeAllButton.appendChild(closeAllButtonIcon);
  closeAllButton.appendChild(closeAllButtonCaption);
  closeAllListItem.appendChild(closeAllButton);

  closeAllButton.addEventListener('click', () => {
    let closeButton: HTMLButtonElement | null = null;
    do {
      closeButton = document.querySelector('button.ui-btn-cancelpopup');
      if (closeButton) {
        closeButton.click();
      }
    } while (closeButton);
  });

  headerMenuList.insertBefore(closeAllListItem, headerMenuList.children[2]);
}
