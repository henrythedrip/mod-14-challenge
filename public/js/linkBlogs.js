// console.log("TODO: Make blog links clickable");

const previews = document.querySelectorAll(".blog-post-preview");

previews.forEach(preview => {
  const postID = preview.getAttribute('data-blog-id');
  preview.addEventListener('click', (event) => {
    window.location = `/posts/${postID}`;
  });
})