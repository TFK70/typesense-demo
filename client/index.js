const searchInput = document.getElementById('search')
const searchButton = document.getElementById('search__button')
const resultsList = document.getElementById('results__list')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
}

const renderResponse = (res) => {
  console.log('resp', res)
}

const query = (payload) => {
  fetch(`http://localhost:4000/book/${payload}`, { headers })
    .then(renderResponse)
    .catch((e) => {
      throw new Error(e)
    })
}

const onSearch = () => {
  query(searchInput.value)
}

searchButton.addEventListener('click', onSearch)
