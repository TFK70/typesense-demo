const searchInput = document.getElementById('search')
const resultsList = document.getElementById('results__list')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
}

const renderResponse = (response) => {
  response.hits.forEach((hit) => {
    resultsList.appendChild(`<li>${hit.document.name}</li>`)
  })
}

const query = (payload) => {
  resultsList.innerHTML('')

  fetch(`http://localhost:4000/search?value=${payload}`, { headers })
    .then(renderResponse)
    .catch((e) => {
      throw new Error(e)
    })
}

const onSearch = (event) => {
  query(event.target.value)
}

searchInput.addEventListener('change', onSearch)
