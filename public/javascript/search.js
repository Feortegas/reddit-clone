async function searchFormHandler(event) {
    event.preventDefault();

    let title = document.querySelector('input[name="search-text"]').value;

    const response = await fetch(`/search/${title}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        document.location.replace(`/search/${title}`);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.search-posts').addEventListener('submit', searchFormHandler);