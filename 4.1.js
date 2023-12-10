document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const query = document.getElementById('query').value;

        if (query.trim() !== '') {

            fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {

                    console.log(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    });
});
