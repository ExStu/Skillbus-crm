let sortByCol = 'data',
    sortSwap = true

// header search

document.addEventListener("DOMContentLoaded", function() {

  new SimpleBar(document.getElementById('app'), {
    autoHide: false,
  })
});

const $searchWrapp = document.getElementById('search-wrapper'),
    $form = document.createElement('form'),
    $searchInput = document.createElement('input');

$searchInput.placeholder = 'Введите запрос'
$searchInput.classList.add('header__input')
$form.classList.add('header__form')

$form.append($searchInput)
$searchWrapp.append($form)

// clients table data

const $app = document.getElementById('app'),
    $table = document.createElement('table'),
    $tableHead = document.createElement('thead'),
    $tableBody = document.createElement('tbody'),
    $tableHeadTr = document.createElement('tr'),
    $tableHeadThId = document.createElement('th'),
    $tableHeadThIdIcon = document.createElement('span'),
    $tableHeadThFio = document.createElement('th'),
    $tableHeadThFioIcon = document.createElement('span'),
    $tableHeadThCreated = document.createElement('th'),
    $tableHeadThCreatedIcon = document.createElement('span'),
    $tableHeadThEdited = document.createElement('th'),
    $tableHeadThEditedIcon = document.createElement('span'),
    $tableHeadThContacts = document.createElement('th'),
    $tableHeadThActions = document.createElement('th');

$table.classList.add('table', 'align-middle')

$tableHeadThId.textContent = 'ID'
$tableHeadThId.style.cursor = 'pointer'
$tableHeadThFio.textContent = 'Фамилия Имя Отчество'
$tableHeadThFio.style.cursor = 'pointer'
$tableHeadThCreated.textContent = 'Дата и время создания'
$tableHeadThCreated.style.cursor = 'pointer'
$tableHeadThEdited.textContent = 'Последние изменения'
$tableHeadThEdited.style.cursor = 'pointer'
$tableHeadThContacts.textContent = 'Контакты'
$tableHeadThActions.textContent = 'Действия'
$tableHeadThIdIcon.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z" fill="#9873FF"/>
</svg>
`
$tableHeadThFioIcon.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z" fill="#9873FF"/>
</svg>
` + 'А-Я'
$tableHeadThCreatedIcon.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z" fill="#9873FF"/>
</svg>
`
$tableHeadThEditedIcon.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z" fill="#9873FF"/>
</svg>
`

$tableHeadThIdIcon.classList.add('table-id-icon')
$tableHeadThFioIcon.classList.add('table-fio-icon')
$tableHeadThCreatedIcon.classList.add('table-created-icon')
$tableHeadThEditedIcon.classList.add('table-edited-icon')

$tableHeadThId.append($tableHeadThIdIcon)
$tableHeadTr.append($tableHeadThId)
$tableHeadThFio.append($tableHeadThFioIcon)
$tableHeadTr.append($tableHeadThFio)
$tableHeadThCreated.append($tableHeadThCreatedIcon)
$tableHeadTr.append($tableHeadThCreated)
$tableHeadThEdited.append($tableHeadThEditedIcon)
$tableHeadTr.append($tableHeadThEdited)
$tableHeadTr.append($tableHeadThContacts)
$tableHeadTr.append($tableHeadThActions)
$tableHead.append($tableHeadTr)

$table.append($tableBody)
$table.append($tableHead)
$app.append($table)

// add contact

function addContact (contact) {
  const $modalSelectWrapp = document.createElement('div'),
      $modalSelect = document.createElement('select'),
      $modalContactInp = document.createElement('input'),
      $modalContactDel = document.createElement('button'),
      $modalOptionTel = document.createElement('option'),
      $modalOptionTelExtra = document.createElement('option'),
      $modalOptionEmail = document.createElement('option'),
      $modalOptionVk = document.createElement('option'),
      $modalOptionFb = document.createElement('option');

  $modalContactInp.placeholder = 'Введите данные контакта'
  $modalOptionTel.textContent = 'Телефон'
  $modalOptionTelExtra.textContent = 'Доп. телефон'
  $modalOptionEmail.textContent = 'Email'
  $modalOptionVk.textContent = 'Vk'
  $modalOptionFb.textContent = 'Facebook'
  $modalContactDel.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
  </svg>`

  $modalContactDel.classList.add('modal__contact-del', 'btn-reset')
  $modalContactInp.classList.add('modal__contact-input')
  $modalSelectWrapp.classList.add('modal__contact-wrapp')
  $modalSelect.classList.add('modal__choices')
  $modalSelect.name = 'select'

  if (!contact) {
    $modalContactInp.type = 'tel'
  }

  $modalSelect.append($modalOptionTel)
  $modalSelect.append($modalOptionTelExtra)
  $modalSelect.append($modalOptionEmail)
  $modalSelect.append($modalOptionVk)
  $modalSelect.append($modalOptionFb)
  $modalSelectWrapp.append($modalSelect)
  $modalSelectWrapp.append($modalContactInp)
  $modalSelectWrapp.append($modalContactDel)

  const choices = new Choices($modalSelect, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    allowHTML: true,
    classNames: {
      containerOuter: 'choices',
    }
  })

  $modalSelect.addEventListener('change', function() {
    if($modalContactInp.inputmask) {
      $modalContactInp.inputmask.remove()
    }
    if($modalSelect.firstChild.value == 'Email') {
      $modalContactInp.type = 'email'
    } else if ($modalSelect.firstChild.value == 'Телефон' || $modalSelect.firstChild.value == 'Доп. телефон') {
      $modalContactInp.type = 'tel'
      var selector = document.querySelectorAll("input[type='tel']");
      var im = new Inputmask("+7 (999)-999-99-99");
      im.mask(selector);
    } else {
      $modalContactInp.type = 'url'
    }
  })

  if(contact) {
    $modalContactInp.value = contact.value
    choices.setValue([{value:contact.type, label: contact.type}])
  }

  $modalContactDel.addEventListener('click', function() {
    $modalSelectWrapp.remove()
  })

  return $modalSelectWrapp
}
// create new client

function addClient(client) {
  const $clientTr = document.createElement('tr'),
      $clientId = document.createElement('td'),
      $clientFio = document.createElement('td'),
      $clientCreated = document.createElement('td'),
      $clientCreatedTime = document.createElement('span'),
      $clientUpdated = document.createElement('td'),
      $clientUpdatedTime = document.createElement('span'),
      $clientContacts = document.createElement('td'),
      $showMoreBtn = document.createElement('button'),
      $clientActions = document.createElement('td'),
      $clientEditBtn = document.createElement('button'),
      $clientDeleteBtn = document.createElement('button');



  $clientId.classList.add('faded-text')
  $clientContacts.classList.add('clients__contacts-td')
  $clientActions.classList.add('actions-td')
  $clientEditBtn.classList.add('clients__edit')
  $clientEditBtn.style.background = "url('img/edit.svg') no-repeat 0px center"
  $clientDeleteBtn.classList.add('clients__delete')
  $showMoreBtn.classList.add('clients__show-more', 'btn-reset')
  $showMoreBtn.style.display = 'none'
  $clientDeleteBtn.style.background = "url('img/delete.svg') no-repeat 0px center"


  client.fio = client.surname + ' ' + client.name + ' ' + client.lastName
  $clientId.textContent = client.id
  $clientFio.textContent = client.fio

  const createdAt = new Date(client.createdAt)
  const updatedAt = new Date(client.updatedAt)
  let days = createdAt.getDate()
  let months = createdAt.getMonth()
  let hours = createdAt.getHours()
  let minutes = createdAt.getMinutes()

  let daysU = updatedAt.getDate()
  let monthsU = updatedAt.getMonth()
  let hoursU = updatedAt.getHours()
  let minutesU = updatedAt.getMinutes()

  if(days.toString() < 10) {
    days = '0' + days
  }

  if(months.toString() < 10) {
    months = '0' + months
  }

  if(hours.toString() < 10) {
    hours = '0' + hours
  }

  if(minutes.toString() < 10) {
    minutes = '0' + minutes
  }

  if(daysU.toString() < 10) {
    daysU = '0' + daysU
  }

  if(monthsU.toString() < 10) {
    monthsU = '0' + monthsU
  }

  if(hoursU.toString() < 10) {
    hoursU = '0' + hoursU
  }

  if(minutesU.toString() < 10) {
    minutesU = '0' + minutesU
  }

  $clientCreated.textContent = days + '.' +  months + '.' + createdAt.getFullYear() + ' '
  $clientCreatedTime.textContent = hours + ':' + minutes
  $clientCreatedTime.classList.add('faded-text-time')
  $clientCreated.append($clientCreatedTime)
  $clientUpdated.textContent = daysU + '.' +  monthsU + '.' + updatedAt.getFullYear() + ' '
  $clientUpdatedTime.textContent = hoursU + ':' + minutesU
  $clientUpdatedTime.classList.add('faded-text-time')
  $clientUpdated.append($clientUpdatedTime)
  $clientEditBtn.textContent = 'Изменить'
  $clientDeleteBtn.textContent = 'Удалить'

  $clientEditBtn.classList.add('btn-reset')
  $clientDeleteBtn.classList.add('btn-reset')
  $clientDeleteBtn.dataset.id = client.id
  $clientEditBtn.dataset.id = client.id

  // adding icons to every contact

  for (let i = 0; i < client.contacts.length; i++) {

    const $contactBtn = document.createElement('button')
    $contactBtn.classList.add('btn-reset', 'contact-icon')
    $contactBtn.id = 'contact-btn'

    if (client.contacts[i].type == 'Телефон') {
      $contactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
      <circle cx="8" cy="8" r="8" fill="#9873FF"/>
      <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
      </g>
      </svg>`

    } else if (client.contacts[i].type == 'Vk') {
      $contactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
      </svg>`

    } else if (client.contacts[i].type == 'Email') {
      $contactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
      </svg>`

    } else if (client.contacts[i].type == 'Facebook') {
      $contactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
      </svg>
      `

    } else {
      $contactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
      </svg>`

    }

    $clientContacts.append($contactBtn)
    tippy($contactBtn, {
      content: client.contacts[i].type + ': ' + client.contacts[i].value,
      theme: 'black',
      animation: 'scale',
    })
  }

  $clientActions.append($clientEditBtn)
  $clientActions.append($clientDeleteBtn)

  $clientContacts.append($showMoreBtn)
  $clientTr.append($clientId)
  $clientTr.append($clientFio)
  $clientTr.append($clientCreated)
  $clientTr.append($clientUpdated)
  $clientTr.append($clientContacts)
  $clientTr.append($clientActions)

  if($clientContacts.childElementCount > 4) {
    for(let i = 4; i < $clientContacts.childNodes.length; i++) {
      $clientContacts.childNodes[i].style.display = 'none'
      $showMoreBtn.style.display = 'flex'
      $showMoreBtn.textContent = '+' + ($clientContacts.childElementCount - 5)
    }
  }

  $showMoreBtn.addEventListener('click', function() {
    for(let i = 0; i < $clientContacts.childNodes.length; i++) {
      $clientContacts.childNodes[i].style.display = 'inline-block'
      $showMoreBtn.style.display = 'none'
    }
  })

  $clientDeleteBtn.addEventListener('click', function(e) {
    $modal.classList.add('open')
    const userId = e.target.dataset.id
    deleteModal(userId)
  })

  $clientEditBtn.addEventListener('click', function(e) {
    $modal.classList.add('open')
    const userId = e.target.dataset.id
    modalEditClient(client, userId)
  })

  return $clientTr
}

// upload to server

async function postServer() {
  const res = await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    body: JSON.stringify({
      name: $modalName.value.trim(),
      surname: $modalSurname.value.trim(),
      lastName: $modalMiddle.value.trim(),

    }),
    headers: {'Content-type': 'application/json'}
  })
}

let contactsArr = []
function pushContacts () {
  contactsArr = []

  const $modalSelectWrapp = document.querySelectorAll('.modal__contact-wrapp')

  for (const item of $modalSelectWrapp) {
    let newContact = {}
    console.log(item.childNodes[0].childNodes[0].childNodes[1].childNodes[0].dataset.value);
    newContact.type = item.childNodes[0].childNodes[0].childNodes[1].childNodes[0].dataset.value
    newContact.value = item.childNodes[1].value

    contactsArr.push(newContact)
    console.log(contactsArr);
    console.log(newContact);
  }
}

// modal window

const $modal = document.getElementById('modal')

function modalAddClient () {
  const $modalContainer = document.getElementById('modal-container'),
      $modalBox = document.getElementById('modal-box'),
      $modalBottom = document.getElementById('modal-bottom'),
      $errorNames = document.createElement('p'),
      $errorContacts = document.createElement('p'),
      $errorField = document.createElement('div'),
      $contactWrapp = document.createElement('div'),
      $modalTop = document.getElementById('modal-top'),
      $modalForm = document.createElement('div'),
      $modalHeader = document.createElement('h2'),
      $modalSurname = document.createElement('input'),
      $surnameWrapp = document.createElement('div'),
      $surnameLabel = document.createElement('label'),
      $nameLabel = document.createElement('label'),
      $nameWrapp = document.createElement('div'),
      $modalName = document.createElement('input'),
      $modalMiddle = document.createElement('input'),
      $middleLabel = document.createElement('label'),
      $middleWrapp = document.createElement('div'),
      $modalAddBtn = document.getElementById('modal-add-contact'),
      $modalSaveBtn = document.createElement('button'),
      $modalCloseBtn = document.getElementById('modal-close'),
      $modalCancelBtn = document.createElement('button');

  $modalContainer.innerHTML = ''
  $modalBottom.innerHTML = ''
  $modalHeader.textContent = 'Новый клиент'
  $modalSaveBtn.textContent = 'Сохранить'
  $modalCancelBtn.textContent = 'Отмена'

  $surnameLabel.textContent = 'Фамилия'
  $nameLabel.textContent = 'Имя'
  $middleLabel.textContent = 'Отчество'

  $modal.classList.add('open')
  $modalHeader.classList.add('modal__header')
  $surnameWrapp.classList.add('input-wrapp')
  $nameWrapp.classList.add('input-wrapp')
  $surnameLabel.classList.add('surname-label')
  $nameLabel.classList.add('name-label')
  $modalSurname.classList.add('modal__surname')
  $modalName.classList.add('modal__name')
  $middleWrapp.classList.add('input-wrapp')
  $middleLabel.classList.add('middle-label')
  $modalMiddle.classList.add('modal__middle')
  $modalAddBtn.classList.remove('visually-hidden')
  $modalSaveBtn.classList.add('modal__save', 'btn-reset')

  $modalSaveBtn.type = 'submit'
  $modalCancelBtn.classList.add('modal__cancel', 'btn-reset')

  $errorField.classList.add('modal__error')
  $errorNames.classList.add('error', 'error-hidden')
  $errorContacts.classList.add('error', 'error-hidden')
  $errorNames.textContent = 'Ошибка: поля Имя и Фамилия обязательны для заполнения'
  $errorContacts.textContent = 'Ошибка: Каждый добавленный контакт должен быть полностью заполнен'
  $errorField.append($errorNames)
  $errorField.append($errorContacts)
  $modalBottom.append($errorField)

  $middleWrapp.append($modalMiddle)
  $middleWrapp.append($middleLabel)
  $surnameWrapp.append($modalSurname)
  $surnameWrapp.append($surnameLabel)
  $nameWrapp.append($modalName)
  $nameWrapp.append($nameLabel)

  $modalForm.append($modalHeader)
  $modalForm.append($surnameWrapp)
  $modalForm.append($nameWrapp)
  $modalForm.append($middleWrapp)
  $modalForm.append($modalCloseBtn)

  $modalBottom.append($contactWrapp)
  $modalBottom.append($modalAddBtn)
  $modalBottom.append($modalSaveBtn)
  $modalBottom.append($modalCancelBtn)

  $modalContainer.append($modalForm)
  $modalTop.append($modalContainer)
  $modalBox.append($modalTop)
  $modalBox.append($modalBottom)

  $modalAddBtn.addEventListener('click', function(e) {
    e.preventDefault()

    $contactWrapp.append(addContact())
    const selector = document.querySelectorAll("input[type='tel']");
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);
    const $modalSelectWrapp = document.querySelectorAll('.modal__contact-wrapp')
    if($modalSelectWrapp.length == 10) {
      $modalAddBtn.classList.add('visually-hidden')
      const lastElem = $modalSelectWrapp[$modalSelectWrapp.length - 1]
      lastElem.style.paddingBottom = '25px'
      $modalSaveBtn.style.marginTop = '15px'
    }
  })

  $modalSurname.addEventListener('focusin', function() {
    $surnameLabel.style.transform = 'scale(.85) translateY(-110%)'
  })

  $modalSurname.addEventListener('focusout', function() {
    if ($modalSurname.value != '') {
      return
    }
    $surnameLabel.style.transform = 'scale(1) translateY(0)'
  })

  $modalName.addEventListener('focusin', function() {
    $nameLabel.style.transform = 'scale(.85) translateY(-110%)'
  })

  $modalName.addEventListener('focusout', function() {
    if ($modalName.value != '') {
      return
    }
    $nameLabel.style.transform = 'scale(1) translateY(0)'
  })

  $modalMiddle.addEventListener('focusin', function() {
    $middleLabel.style.transform = 'scale(.85) translateY(-110%)'
  })

  $modalMiddle.addEventListener('focusout', function() {
    if ($modalMiddle.value != '') {
      return
    }
    $middleLabel.style.transform = 'scale(1) translateY(0)'
  })

  // modal close

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      $modal.classList.remove('open')
    }
  })

  document.querySelector('#modal #modal-box').addEventListener('click', event => {
    event._isClickWithInModal = true;
  });

  $modal.addEventListener('click', event => {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  })

  $modalCloseBtn.addEventListener('click', (e) => {
    e.preventDefault()
    $modal.classList.remove('open')
  })

  // modal save

  $modalBox.addEventListener('submit', async function(e) {
    e.preventDefault()
    let result = true

    $errorContacts.classList.add('error-hidden')
    $errorNames.classList.add('error-hidden')

    const $modalContactInputs = document.querySelectorAll('.modal__contact-input')

    for (const input of $modalContactInputs) {
      if (input.value == '') {
        console.log(input.value);
        $errorContacts.classList.remove('error-hidden')
        result = false
      }
    }

    if ($modalName.value == '' || $modalSurname.value == '') {
      $errorNames.classList.remove('error-hidden')
      result = false
    }

    if (result == true) {
      pushContacts()

      const res = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify({
          name: $modalName.value.trim(),
          surname: $modalSurname.value.trim(),
          lastName: $modalMiddle.value.trim(),
          contacts: contactsArr,
        }),
        headers: {'Content-type': 'application/json'}
      })

      $modal.classList.remove('open')
      render()
    }

  })


}

function modalEditClient (client, id) {
  const $modalContainer = document.getElementById('modal-container'),
      $modalBox = document.getElementById('modal-box'),
      $modalBottom = document.getElementById('modal-bottom'),
      $errorNames = document.createElement('p'),
      $errorContacts = document.createElement('p'),
      $errorField = document.createElement('div'),
      $contactWrapp = document.createElement('div'),
      $modalTop = document.getElementById('modal-top'),
      $modalForm = document.createElement('div'),
      $modalHeader = document.createElement('h2'),
      $modalHeaderId = document.createElement('span'),
      $modalSurname = document.createElement('input'),
      $surnameWrapp = document.createElement('div'),
      $surnameLabel = document.createElement('label'),
      $nameLabel = document.createElement('label'),
      $nameWrapp = document.createElement('div'),
      $modalName = document.createElement('input'),
      $modalMiddle = document.createElement('input'),
      $middleLabel = document.createElement('label'),
      $middleWrapp = document.createElement('div'),
      $modalAddBtn = document.getElementById('modal-add-contact'),
      $modalSaveBtn = document.createElement('submit'),
      $modalCloseBtn = document.getElementById('modal-close'),
      $modalCancelBtn = document.createElement('button');

  $modalContainer.innerHTML = ''
  $modalBottom.innerHTML = ''
  $modalHeader.textContent = 'Изменить данные' + ' '
  $modalHeaderId.textContent = 'ID:' + ' ' + client.id
  $modalSaveBtn.textContent = 'Сохранить'
  $modalCancelBtn.textContent = 'Отмена'

  $surnameLabel.textContent = 'Фамилия'
  $nameLabel.textContent = 'Имя'
  $middleLabel.textContent = 'Отчество'
  $modalSurname.value = client.surname
  $modalName.value = client.name
  $modalMiddle.value = client.lastName

  $modal.classList.add('open')
  $modalHeader.classList.add('modal__header')
  $modalHeaderId.classList.add('modal__header-id')
  $surnameWrapp.classList.add('input-wrapp')
  $nameWrapp.classList.add('input-wrapp')
  $surnameLabel.classList.add('surname-label')
  $nameLabel.classList.add('name-label')
  $modalSurname.classList.add('modal__surname')
  $modalName.classList.add('modal__name')
  $middleWrapp.classList.add('input-wrapp')
  $middleLabel.classList.add('middle-label')
  $modalMiddle.classList.add('modal__middle')
  $modalAddBtn.classList.remove('visually-hidden')
  $modalSaveBtn.classList.add('modal__save', 'btn-reset')
  $modalCancelBtn.classList.add('modal__cancel', 'btn-reset')

  $modalHeader.append($modalHeaderId)
  $middleWrapp.append($modalMiddle)
  $middleWrapp.append($middleLabel)
  $surnameWrapp.append($modalSurname)
  $surnameWrapp.append($surnameLabel)
  $nameWrapp.append($modalName)
  $nameWrapp.append($nameLabel)

  $modalForm.append($modalHeader)
  $modalForm.append($surnameWrapp)
  $modalForm.append($nameWrapp)
  $modalForm.append($middleWrapp)
  $modalForm.append($modalCloseBtn)

  $modalBottom.append($contactWrapp)
  $modalBottom.append($modalAddBtn)
  $modalBottom.append($modalSaveBtn)
  $modalBottom.append($modalCancelBtn)

  $errorField.classList.add('modal__error')
  $errorNames.classList.add('error', 'error-hidden')
  $errorContacts.classList.add('error', 'error-hidden')
  $errorNames.textContent = 'Ошибка: поля Имя и Фамилия обязательны для заполнения'
  $errorContacts.textContent = 'Ошибка: Каждый добавленный контакт должен быть полностью заполнен'
  $errorField.append($errorNames)
  $errorField.append($errorContacts)
  $modalBottom.append($errorField)

  $modalContainer.append($modalForm)
  $modalTop.append($modalContainer)
  $modalBox.append($modalTop)
  $modalBox.append($modalBottom)

  $surnameLabel.style.transform = 'scale(.85) translateY(-110%)'
  $nameLabel.style.transform = 'scale(.85) translateY(-110%)'
  $middleLabel.style.transform = 'scale(.85) translateY(-110%)'

  for (const contact of client.contacts) {
    $contactWrapp.append(addContact(contact))
  }

  $modalAddBtn.addEventListener('click', function(e) {
    e.preventDefault()

    $contactWrapp.append(addContact())
    const selector = document.querySelectorAll("input[type='tel']");
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);
    const $modalSelectWrapp = document.querySelectorAll('.modal__contact-wrapp')
    if($modalSelectWrapp.length == 10) {
      $modalAddBtn.classList.add('visually-hidden')
      const lastElem = $modalSelectWrapp[$modalSelectWrapp.length - 1]
      lastElem.style.paddingBottom = '25px'
      $modalSaveBtn.style.marginTop = '15px'
    }
  })

  $modalSurname.addEventListener('focusin', function() {
    $surnameLabel.style.transform = 'scale(.85) translateY(-110%)'
  })

  $modalSurname.addEventListener('focusout', function() {
    if ($modalSurname.value != '') {
      return
    }
    $surnameLabel.style.transform = 'scale(1) translateY(0)'
  })

  $modalName.addEventListener('focusin', function() {
    $nameLabel.style.transform = 'scale(.85) translateY(-110%)'
  })

  $modalName.addEventListener('focusout', function() {
    if ($modalName.value != '') {
      return
    }
    $nameLabel.style.transform = 'scale(1) translateY(0)'
  })

  $modalMiddle.addEventListener('focusin', function() {
    $middleLabel.style.transform = 'scale(.85) translateY(-110%)'
  })

  $modalMiddle.addEventListener('focusout', function() {
    if ($modalMiddle.value != '') {
      return
    }
    $middleLabel.style.transform = 'scale(1) translateY(0)'
  })

  // modal close

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      $modal.classList.remove('open')
    }
  })

  document.querySelector('#modal #modal-box').addEventListener('click', event => {
    event._isClickWithInModal = true;
  });

  $modal.addEventListener('click', event => {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  })

  $modalCloseBtn.addEventListener('click', (e) => {
    e.preventDefault()
    $modal.classList.remove('open')
  })

  $modalCancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    $modal.classList.remove('open')
  })

  console.log(id);

  // modal save

  // $modalBox.addEventListener('submit', function(e) {
  //   e.preventDefault()
  // })

  $modalSaveBtn.addEventListener('click', async function(e) {
    e.preventDefault()

    const $contactInputs = document.querySelector('.modal__contact-input')
    console.log($contactInputs);

    let result = true

    $errorContacts.classList.add('error-hidden')
    $errorNames.classList.add('error-hidden')

    const $modalContactInputs = document.querySelectorAll('.modal__contact-input')

    for (const input of $modalContactInputs) {
      if (input.value == '') {
        console.log(input.value);
        $errorContacts.classList.remove('error-hidden')
        result = false
      }
    }

    if ($modalName.value == '' || $modalSurname.value == '') {
      $errorNames.classList.remove('error-hidden')
      result = false
    }

    if(result == true) {

      pushContacts()

      const res = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: $modalName.value.trim(),
          surname: $modalSurname.value.trim(),
          lastName: $modalMiddle.value.trim(),
          contacts: contactsArr,
        }),
        headers: {'Content-type': 'application/json'}
      })

      $modal.classList.remove('open')
      render()
    }

  })

  render()

}

// open modal

const $clientsAddBtn = document.getElementById('clients-btn');

$clientsAddBtn.addEventListener('click', function() {
  $modal.classList.add('open')
  modalAddClient()
})

// render

let timeout;

async function render() {

  let listClients = []

  const res = await fetch('http://localhost:3000/api/clients');
  const data = await res.json();

  listClients = [...data]

  $tableBody.innerHTML = ''

  let copyListData = [...listClients]

  // sorting

  copyListData = copyListData.sort(function(a, b) {

    let sort = a[sortByCol] < b[sortByCol]

    if (sortSwap != true) sort = a[sortByCol] > b[sortByCol]

    if (sort) return -1

  })

  console.log(copyListData);

  // search

  if($searchInput.value.trim() !== '') {

    copyListData = copyListData.filter(function(client) {
      if ((client.name.toLowerCase().includes($searchInput.value.trim())) || (client.name.includes($searchInput.value.trim())) || (client.lastName.toLowerCase().includes($searchInput.value.trim())) || (client.lastName.includes($searchInput.value.trim())) || (client.surname.toLowerCase().includes($searchInput.value.trim())) || (client.surname.includes($searchInput.value.trim()))) return true
    })
  }

  console.log(copyListData);


  copyListData.forEach(user => {
    const newUserEle = addClient(user);
    $tableBody.append(newUserEle)
  })

}

await render()

// search

$searchInput.addEventListener('input', () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    render()
  }, 300)
})

// sorting

// id

$tableHeadThId.addEventListener('click', function() {
  sortByCol = 'id'
  sortSwap = !sortSwap
  $tableHeadThIdIcon.classList.toggle('rotate')
  // console.log(listClients)
  render()
})

// FIO

$tableHeadThFio.addEventListener('click', function() {
  sortByCol = 'fio'
  sortSwap = !sortSwap
  $tableHeadThFioIcon.classList.toggle('rotate')
  // console.log(listClients)
  render()
})

// createdAt

$tableHeadThCreated.addEventListener('click', function() {
  sortByCol = 'createdAt'
  sortSwap = !sortSwap
  $tableHeadThCreatedIcon.classList.toggle('rotate')
  // console.log(listClients)
  render()
})

// updatedAt

$tableHeadThEdited.addEventListener('click', function() {
  sortByCol = 'updatedAt'
  sortSwap = !sortSwap
  $tableHeadThEditedIcon.classList.toggle('rotate')
  // console.log(listClients)
  render()
})

// delete Modal

function deleteModal (id) {
  const $modalContainer = document.getElementById('modal-container'),
      $modalBox = document.getElementById('modal-box'),
      $modalBottom = document.getElementById('modal-bottom'),
      $modalTop = document.getElementById('modal-top'),
      $modalForm = document.createElement('div'),
      $modalHeader = document.createElement('h2'),
      $modalText = document.createElement('p'),
      $modalAddBtn = document.getElementById('modal-add-contact'),
      $modalSaveBtn = document.createElement('submit'),
      $modalCloseBtn = document.getElementById('modal-close'),
      $modalCancelBtn = document.createElement('button');

  $modalContainer.innerHTML = ''
  $modalBottom.innerHTML = ''
  $modalHeader.textContent = 'Удалить клиента'
  $modalText.textContent = 'Вы действительно хотите удалить данного клиента?'
  $modalSaveBtn.textContent = 'Удалить'
  $modalCancelBtn.textContent = 'Отмена'

  $modalHeader.style.textAlign = 'center'
  $modalText.style.maxWidth = '275px'
  $modalText.style.textAlign = 'center'
  $modalTop.style.minWidth = '100%'

  $modal.classList.add('open')
  $modalHeader.classList.add('modal__header')
  $modalText.classList.add('modal__text')
  $modalSaveBtn.classList.add('modal__save', 'btn-reset')
  $modalCancelBtn.classList.add('modal__cancel', 'btn-reset')
  $modalAddBtn.classList.add('visually-hidden')

  $modalForm.append($modalHeader)
  $modalForm.append($modalText)
  $modalForm.append($modalCloseBtn)

  $modalBottom.append($modalAddBtn)
  $modalBottom.append($modalSaveBtn)
  $modalBottom.append($modalCancelBtn)

  $modalContainer.append($modalForm)
  $modalTop.append($modalContainer)
  $modalBox.append($modalTop)
  $modalBox.append($modalBottom)

  // modal close

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      $modal.classList.remove('open')
    }
  })

  document.querySelector('#modal #modal-box').addEventListener('click', event => {
    event._isClickWithInModal = true;
  });

  $modal.addEventListener('click', event => {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  })

  $modalCloseBtn.addEventListener('click', (e) => {
    e.preventDefault()
    $modal.classList.remove('open')
  })

  console.log(id);

  $modalSaveBtn.addEventListener('click', async function(e) {
    e.preventDefault()
    const res = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
      });

    $modal.classList.remove('open')
    render()
  })
}


