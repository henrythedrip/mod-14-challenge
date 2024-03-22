const editPostButton = document.querySelectorAll('.edit-post-button');

editPostButton.forEach(btn => {
  btn.addEventListener('click', () => {
    // dashboard-single-post
    const parent = btn.parentElement
    console.log(parent.onclick);

    const container = parent.querySelector(".single-post-container")    
    // get the title value
    const title = container.querySelector(".single-post-title")
    const titleValue = title.innerHTML;
    // get the content value
    const content = container.querySelector('.single-post-content');
    const contentValue = content.innerHTML;
    // get the date value
    const date = container.querySelector('.single-post-date');
    const dateValue = date.innerHTML;
    
    console.log(titleValue);
    console.log(contentValue);
    console.log(dateValue);

    // remove children from container so we can add our own
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }

    // add our own children that allow us to edit
    let titleChild = document.createElement('input');
    titleChild.id = "edit-post-title";
    titleChild.type = "text";
    titleChild.value = titleValue;
    container.appendChild(titleChild);

    let contentChild = document.createElement('textarea');
    contentChild.id = 'edit-post-content';
    contentChild.name = 'edit-post-content';
    contentChild.cols = 50;
    contentChild.rows = 10;
    contentChild.value = contentValue;
    container.appendChild(contentChild);

    
    // change edit post button to a save post button
    let savePostButton = document.createElement('button');
    savePostButton.id ='save-post-button';
    savePostButton.innerHTML = 'Save Post';
    savePostButton.addEventListener('click', async (event) => {
        console.log(parent.children);
        const _container = parent.querySelector(".single-post-container")    
        const _title = _container.querySelector(".edit-post-title")
        const _titleValue = _title.value;
        // get the content value
        const _content = _container.querySelector('.edit-post-content');
        const _contentValue = _content.value;

        console.log(_titleValue, _contentValue);
        // get the date value
        // const date = container.querySelector('.single-post-date');
        // const dateValue = date.innerHTML;
    });
    container.appendChild(savePostButton)

  });
});


{/* <div class="create-post">
  {{!-- <form action="submit"> --}}
  <h3>Create New Post:</h3>
  <h4>Post Title:</h4>
  <input type="text" id="post-title">
  <h4>Post Content:</h4>
  <textarea name="post-content" id="post-content" cols="50" rows="10"></textarea>
  <button class="create-post-submit-button" id="submit-post-button">Submit</button>
  {{!-- </form> --}}
</div> */}








    // make request to delete this post
    // btn.addEventListener('click', async (event) => {
    //   event.preventDefault();
    //   const response = await fetch(`/api/posts/${postId}`, {
    //     method: 'DELETE',
    //   });
  
    //   if (response.ok) {
    //     console.log(response.body);
    //     location.reload();
    //   }
    // });
  
  
//   });