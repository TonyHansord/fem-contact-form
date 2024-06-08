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

const inputs = document.querySelectorAll('input')
const message = document.querySelector('textarea')
const consent = document.querySelector('input[type="checkbox"]')
const submitButton = document.querySelector('button')
const errorMessages = document.querySelectorAll('.error-message')

const fields = [...inputs, message]

const validateForm = () => {
  errorMessages.forEach(errorMessage => {
    errorMessage.classList.add('hidden')
  })

  let isValid = true

  for (const field of fields) {
    if (field.value === '') {
      console.log(field.parentElement)
      field.parentElement.lastElementChild.classList.remove('hidden')

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

submitButton.addEventListener('click', e => {
  console.log('submit button clicked')

  if (!validateForm()) {
    e.preventDefault()
  }
})

// Handle form submit
