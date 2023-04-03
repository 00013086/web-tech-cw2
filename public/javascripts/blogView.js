const successParag = document.querySelector('.success-msg');
const errorParag = document.querySelector('.error-msg');
const likeBtn = document.querySelector('.likeBtn');
const dislikeBtn = document.querySelector('.dislikeBtn');
const id = window.location.pathname.split('/')[2];
const url = `http://localhost:8000/like`;

likeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (likeBtn.innerHTML == 'Dislike') {
        console.log('already liked')
        dislike()
        return
    }

    like()
});

function like() {
    let form = new FormData();
    form.append('blog_id', id)

    fetch(url, {
        method: 'POST',
        body: form
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            successParag.innerHTML = "Blog liked successfully";
            likeBtn.innerHTML = "Dislike";
            console.log(data);
        })
        .catch(error => {
            errorParag.innerHTML = "There was an error while liking blog";
            console.error('There was a problem with the fetch operation:', error);
        });
}

function dislike() {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            successParag.innerHTML = "Blog disliked successfully";
            likeBtn.innerHTML = "Like it";
            console.log(data);
        })
        .catch(error => {
            errorParag.innerHTML = "There was an error while disliking blog";
            console.error('There was a problem with the fetch operation:', error);
        });
}