

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


// Handle form submit