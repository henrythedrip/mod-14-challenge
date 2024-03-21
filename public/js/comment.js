async function addCommentHandler() {
    const content = document.getElementById('comment-content').value;

    if (content) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            content: content,
            // get post id from url
            postId: String(window.location).split('/').at(-1)
          }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          const resData = await response.json()
          location.reload();
        }
    }

};

document.getElementById('submit-comment-button').addEventListener('click', addCommentHandler)

