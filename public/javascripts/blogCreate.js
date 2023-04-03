const successParag = document.querySelector('.success-msg');
const errorParag = document.querySelector('.error-msg');
const form = document.querySelector('#create-blog-form');
const url = `http://localhost:8000/blog/new`;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            successParag.className = "success-msg-on"
            successParag.innerHTML = "Blog created successfully";
            form.reset();
            console.log(data);
        })
        .catch(error => {
            errorParag.className = "error-msg-on"
            errorParag.innerHTML = "There was an error while creating blog";
            console.error('There was a problem with the fetch operation:', error);
        });
});