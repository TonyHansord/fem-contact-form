const queryTypes = document.querySelectorAll('input[type="radio"]')

// Handle query type change
const handleChangeQueryType = e => {
  queryTypes.forEach(queryType => {
    queryType.parentElement.classList.remove('is-checked')
  })
  e.target.parentElement.classList.add('is-checked')
}

queryTypes.forEach(queryType => {
  queryType.addEventListener('change', e => {
    handleChangeQueryType(e)
  })
})

// Handle form validation

const inputs = document.querySelectorAll('input[type="text"]')
const email = document.querySelector('input[type="email"]')
const message = document.querySelector('textarea')
const consent = document.querySelector('input[type="checkbox"]')
const submitButton = document.querySelector('button')
const errorMessages = document.querySelectorAll('.error-message')

const fields = [...inputs, message]

const validateForm = () => {
  errorMessages.forEach(errorMessage => {
    errorMessage.classList.add('hidden')
  })
  email.classList.remove('is-error')

  let isValid = true

  for (const field of fields) {
    field.classList.remove('is-error')

    if (field.value === '') {
      console.log(field.parentElement)
      field.classList.add('is-error')
      field.parentElement.lastElementChild.classList.remove('hidden')

      isValid = false
    }
  }

  if (email.value === '') {
    email.classList.add('is-error')
    email.parentElement.lastElementChild.classList.remove('hidden')
    isValid = false
  } else {
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    if (!emailPattern.test(email.value)) {
      email.classList.add('is-error')
      email.parentElement.lastElementChild.classList.remove('hidden')
      isValid = false
    }
  }

  if (document.querySelector('.is-checked') === null) {
    document
      .querySelector('.query-type .form-field')
      .lastElementChild.classList.remove('hidden')
    isValid = false
  }

  if (!consent.checked) {
    consent.parentElement.parentElement.lastElementChild.classList.remove(
      'hidden'
    )
    isValid = false
  }
  return isValid
}

const showModal = () => {
  const modal = document.querySelector('.modal')
  modal.classList.remove('hidden')

  setTimeout(() => {
    modal.classList.add('hidden')
  }, 4000)
}

submitButton.addEventListener('click', e => {
  console.log('submit button clicked')

  if (!validateForm()) {
    e.preventDefault()
  } else {
    document.querySelectorAll('.radio-group label').forEach(label => {
      label.classList.remove('is-checked')
    })
    document.querySelector('form').reset()
    showModal()
  }
})
