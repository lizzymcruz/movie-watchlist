const movieInput = document.getElementById('movie-search-input')
const movieSearch = document.getElementById('movie-search')

movieSearch.addEventListener('submit', function(e){
    e.preventDefault()

    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=8ea9847d')
})
