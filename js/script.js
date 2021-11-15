const carouselposts = document.querySelectorAll(".carousel figure");
carouselposts.forEach(function (post) {
  post.onclick = function (event) {
    document.querySelector("selected-post").classList.remove("selected-post");
    const clickParent = event.target.parentNode;
    clickParent.classList.add("selected-post");
  };
});
