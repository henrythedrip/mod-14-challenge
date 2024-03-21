const deleteButtons = document.querySelectorAll('.delete-post-button');

deleteButtons.forEach(btn => {
  // get id of post to delete
  const postId = btn.parentElement.getAttribute('data-blog-id')

  // make request to delete this post
  btn.addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(response.body);
      location.reload();
    }
  });


});