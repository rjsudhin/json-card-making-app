
const creationSection = document.querySelector('#creation-section')
const cardContainer = document.querySelector('#card-container')
const createBtn = document.querySelector('.create-btn')
const allInputs = document.querySelectorAll('input')


// stop submit button default behaviour
createBtn.addEventListener('click', (e) => {
  e.preventDefault() // desable the submission
  let fillResult = checkingInputFields()
  if (fillResult) {
    console.log('All fields are filled')
    // proceed with form submisson or other actions
    addingValuesInLocalStorage()
    let localValues = localStorage.getItem('userCardItems')
    const localValuesArr = JSON.parse(localValues)
    console.log(localValuesArr)
    createJsonUI(localValuesArr)
  } else {
    console.log('Plealse fill in all required fields.')
    // Display error messages or prevent submission
  }
})

function addingValuesInLocalStorage() {
  let localArr = []
  allInputs.forEach((input) => {
    localArr.push(input.value)
  })
  localStorage.setItem('userCardItems', JSON.stringify(localArr))
}

function checkingInputFields() {
  for (const input of allInputs) {
    if (input.value.trim() == '') { // .trim() removes leading/trailing whitespace
      console.log(input.type)
      return false // found an empty field
    }
  }
  return true // All fields are filled 
}

function createJsonUI(arr) {
  removeCreationSection()
  const card = document.createElement('div')
  card.classList.add('card')
  const cardHeader = document.createElement('div')
  cardHeader.classList.add('card-header')
  cardHeader.innerHTML = `<div class='red'></div>
    <div class='green'></div>
    <div class='yellow'></div>`
  
  card.append(cardHeader)

  const cardBody = document.createElement('div')
  cardBody.innerHTML = `
    <ol>
      <li>{</li>
      <li><div>name : </div>${arr[0]}</li>
      <li><div>title : </div>"${arr[1]}</li>
      <li><div>email : </div>${arr[2]}</li>
      <li><div>link : </div>${arr[3]}</li>
      <li>}</li>
    </ol`
  cardBody.classList.add('card-body')


  card.append(cardBody)
  cardContainer.append(card)
  console.log(cardContainer)
}


function removeCreationSection() {
  document.body.removeChild(creationSection)
}



