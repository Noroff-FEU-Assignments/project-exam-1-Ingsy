const carouselposts = document.querySelectorAll(".carousel figure");
carouselposts.forEach(function (post) {
  post.onclick = function (event) {
    document.querySelector("selected-post").classList.remove("selected-post");
    const clickParent = event.target.parentNode;
    clickParent.classList.add("selected-post");
  };
});

function getPosts() {
  const url = "http://projectexamingsy.local/wp-json/wp/v2/posts/";
  fetch(url)
    .then((response) => response.json())
    .then((list) => {
      let html = "";
      for (let i = 0; i < list.length; i++) {
        const title = title.rendered;
        const text = content.rendered;
        const logo = guide.rendered;
        const alt = caption.alt_text;
        const web = caption.rendered;
        const div = ` <figure class="selected-post latest-post cc-column">
<h3>${title}</h3>
<img
  src="${logo}"
  alt="Ikea-logo"
/>
<h3>read more</h3>
</figure> 
`;
        html = html + div;
      }
      document.querySelector(".container").innerHTML += html;
    })
    .catch((error) => {});
}

getProducts();
