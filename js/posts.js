async function getAllPosts() {
  fetch(`http://projectexamingsy.local/wp-json/wp/v2/posts`)
    .then(async (resp) => resp.json())
    .then(async (data) => {
      for (let i = 0; i < data.length; i++) {
        const post = data[i];
        document.querySelector(".spesific-container").innerHTML +=
          await renderPost(post, true);
      }
    });
}

async function getSinglePost(id) {
  fetch(`http://projectexamingsy.local/wp-json/wp/v2/posts/${id}`)
    .then(async (resp) => resp.json())
    .then(async (data) => {
      document.querySelector(".spesific-container").innerHTML +=
        await renderPost(data, false);
    });
}

async function renderPost(post, includeUrl) {
  const description = post.content.rendered;
  const title = post.title.rendered;
  const imageRequest = await fetch(
    "http://projectexamingsy.local/wp-json/wp/v2/media/" + post.featured_media
  );
  const imageData = await imageRequest.json();
  return `
  <div class="container-one">
  <div class="blog-spesific">
    <h1>${title}</h1>
    <p>
     ${description}
    </p>
    ${
      includeUrl
        ? `<a href="/blog-spesific.html?id=${post.id}">les mer</a>`
        : ""
    }
  </div>
  <div class="blog-spesific">
    <div><img src="${imageData.guid.rendered}" class="img-logo" /></div>
    <section class="blog-spesific-two">
      <div class="bold">
        <div class="item">go to site:</div>
        <div class="item">discount:</div>
        <div class="item">student discount:</div>
        <div class="item">available on app:</div>
      </div>
      <div class="margin2">
        <div class="item">
          <a href="https://www.zalando.no">www.zalando.no</a>
        </div>
        <div class="item">10% when signup newsletter</div>
        <div class="item">no student discount</div>
        <div>Available</div>
      </div>
    </section>
    <h2>Shipping & Shopping details</h2>
    <section class="blog-spesific-two">
      <div class="bold">
        <div class="item">Shipping cost:</div>
        <div class="item">Return & refunds:</div>
        <div class="item2">Payment options:</div>
        <div class="item">Shipping-to-location:</div>
        <div>Track order:</div>
      </div>
      <div class="margin">
        <div class="item">kr 29,-</div>
        <div>30 days/full refund</div>
        <div><img src="images/payment.jpg" class="img-size" /></div>
        <div class="item">Europa</div>
        <div>Available</div>
      </div>
    </section>
  </div>
</div>
    `;
}
