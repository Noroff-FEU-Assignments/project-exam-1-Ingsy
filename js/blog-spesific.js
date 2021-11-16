const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `http://projectexamingsy.local/wp-json/wp/v2/posts/${id}`;
fetch(url)
  .then((resp2) => resp2.json())
  .then((product) => {
    document.querySelector(".spesific-container").innerHTML =;
    document.querySelector(".container-one").innerHTML = `
    <div class="blog-spesific">
    <h1>${post.title.rendered}</h1>
    <p class="lorem">
    ${post.content.rendered}
    </p>
  </div>
        `;
    document.querySelector(".blog-spesific").innerHTML = `
    <div><img ${post.featured_media} class="img-logo" /></div>
    <section class="blog-spesific-two">
      <div class="bold">
        <div class="item">go to site:</div>
        <div class="item">discount:</div>
        <div class="item">student discount:</div>
        <div class="item">available on app:</div>
      </div>
      <div class="margin">
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
        `;
  });
