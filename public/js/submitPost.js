const postTitle = document.getElementById('post-title')
const postContent = document.getElementById('post-content')
const submitButton = document.getElementById('submit-post-button')

submitButton.addEventListener('click', async (event) => {
    // console.log(postTitle.value, postContent.value);
    if (postTitle.value && postContent.value) {
        event.preventDefault();
        const newPost = {
            post_title: postTitle.value,
            content: postContent.value,
        }

        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify(newPost),
          headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
          console.log(response.body);
          location.reload();
        }


        // we can use this on our backend, but not here
        // Post.create(newPost).then(
        //     newPost => { res.status(201).json(newPost) }
        // ).catch((err) => {
        //     console.log(err);
        //     res.status(400).json(err);
        // })
    }

});
