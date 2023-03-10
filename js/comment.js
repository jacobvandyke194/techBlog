const newComment = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('.card-title');
    const description = document.querySelector('#comment-description').value.trim();
    
    const post_id = postTitle.getAttribute('data-id')
    if (description) {
        const response = await fetch(`/api/post/:id`, {
            method: 'POST',
            body: JSON.stringify({ description, post_id }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(response.ok) {
            document.location.reload();            
        } else if (!response.ok) {
            alert(response.statusText)
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', newComment);
