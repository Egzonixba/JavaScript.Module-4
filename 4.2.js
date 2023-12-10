document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const queryInput = document.getElementById('query');
        const query = queryInput.value.trim();

        if (query !== '') {

            fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {

                    console.log('Search Result:', data);


                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            console.warn('Please enter a valid search query.');
        }
    });
});
