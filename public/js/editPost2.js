document.getElementById("save-post-button").addEventListener("click", () => {
    const newTitle = document.getElementById("new-title").value;
    const newContent = document.getElementById("new-content").value;
    console.log("new title:", newTitle, "new content:", newContent);
    
    const postID = String(window.location).split('/').at(-1);
    fetch(`/api/editpost/${postID}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: newTitle,
        content: newContent
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          window.location = '/dashboard';
        }
      })
      .catch((err) => {
        console.error(err);
      })
})