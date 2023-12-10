document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const resultsContainer = document.getElementById('results');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const queryInput = document.getElementById('query');
        const query = queryInput.value.trim();

        if (query !== '') {

            fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {

                    resultsContainer.innerHTML = '';


                    data.forEach(tvShow => {
                        const articleElement = document.createElement('article');
                        articleElement.classList.add('tv-show');


                        const nameElement = document.createElement('h2');
                        nameElement.textContent = tvShow.show.name;


                        const urlElement = document.createElement('a');
                        urlElement.textContent = 'Details';
                        urlElement.href = tvShow.show.url;
                        urlElement.target = '_blank';


                        const imageElement = document.createElement('img');
                        imageElement.src = tvShow.show.image?.medium ?? 'placeholder-image.jpg';
                        imageElement.alt = tvShow.show.name;


                        const summaryElement = document.createElement('div');
                        summaryElement.innerHTML = tvShow.show.summary;


                        articleElement.appendChild(nameElement);
                        articleElement.appendChild(urlElement);
                        articleElement.appendChild(imageElement);
                        articleElement.appendChild(summaryElement);


                        resultsContainer.appendChild(articleElement);
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            console.warn('Please enter a valid search query.');
        }
    });
});
