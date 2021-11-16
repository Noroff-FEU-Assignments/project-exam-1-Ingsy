let curretDot = 0;
let numVisiblePost = 4;

async function getPosts() {
  const url = "http://projectexamingsy.local/wp-json/wp/v2/posts?per_page=12";
  fetch(url)
    .then(async (response) => response.json())
    .then(async (list) => {
      let html = "";
      let dotNumber = 0;
      for (let i = 0; i < list.length; i++) {
        const post = list[i];
        const title = post.title.rendered;
        const text = post.content.rendered;
        const imageRequest = await fetch(
          "http://projectexamingsy.local/wp-json/wp/v2/media/" +
            post.featured_media
        );
        const imageData = await imageRequest.json();
        const figure = `<figure class="selected-post latest-post">
                        <h3>${title}</h3>
                        <img class="img-slider" src="${imageData.guid.rendered}" alt="${imageData.alt_text}"/>
                        <h3>Read more</h3>
                      </figure> 
                    `;
        html = html + figure;
        document.querySelector(".container").innerHTML += figure;
        let rest = i % numVisiblePost; // Modulo: https://en.wikipedia.org/wiki/Modulo_operation
        if (rest === 0) {
          document.querySelector(
            ".slide-dots"
          ).innerHTML += `<div class="slide-dot" onclick="setSlide(${dotNumber})"></div>`;
          dotNumber++;
        }
      }
      let dots = document.querySelectorAll(".slide-dot");
      dots[curretDot].classList.toggle("current");
    })
    .catch((error) => {});
}

function setupCarousel() {
  const carouselposts = document.querySelectorAll(".carousel figure");
  carouselposts.forEach(function (post) {
    post.onclick = function (event) {
      document.querySelector("selected-post").classList.remove("selected-post");
      const clickParent = event.target.parentNode;
      clickParent.classList.add("selected-post");
    };
  });
}

function setSlide(pos) {
  const carouselposts = document.querySelectorAll(".carousel figure");
  //1. Hide all posts
  carouselposts.forEach(function (post) {
    post.style.display = "none";
  });
  // bytt ut med array slice,google it baby
  // 2. Show only correct range of posts according to clicked dot
  for (
    let i = pos * numVisiblePost;
    i < pos * numVisiblePost + numVisiblePost;
    i++
  ) {
    carouselposts[i].style.display = "block";
  }
  let dots = document.querySelectorAll(".slide-dot");
  // Remove current from all dots
  dots.forEach(function (dot) {
    dot.classList.remove("current");
  });
  // Add current to actually clicked dot
  dots[pos].classList.toggle("current");
}

getPosts();
