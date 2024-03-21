
// make homepage posts clickable
const previews = document.querySelectorAll(".blog-post-preview");

previews.forEach(preview => {
  const postID = preview.getAttribute('data-blog-id');
  preview.addEventListener('click', (event) => {
    console.log(postID);
    window.location = `/posts/${postID}`;
  });
})

// make dashboard posts clickable
const dashboardPosts = document.querySelectorAll(".single-post-container");
console.log(dashboardPosts);

dashboardPosts.forEach(dashboardPost => {
  const postID = dashboardPost.parentElement.getAttribute('data-blog-id');
  console.log(postID);
  dashboardPost.addEventListener('click', (event) => {
    // console.log(postID);
    window.location = `/posts/${postID}`;
  });
})