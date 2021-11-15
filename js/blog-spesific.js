const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `http://projectexamingsy.local/wp-json/wp/v2/posts/${id}`;
fetch(url)
  .then((resp2) => resp2.json())
  .then((product) => {
    document.querySelector("#jacket-name").innerHTML = product.name;
    document.querySelector(".jacket-area").innerHTML = `
        <div></div>
            <div class="big grey-light-bg cc-column">
              <img
                src="./Img/jacket-spesific/windbreaker-jacket-big.png"
                alt="windbreaker jacket"
              />
            </div>
            <div class="selection">
              <div class="cc-column">
                <img
                  src="./Img/jacket-spesific/windbreaker-jacket-down.png"
                  alt="windbreaker jacket"
                />
              </div>
              <div class="cc-column">
                <img
                  src="./Img/jacket-spesific/windbreaker-jacket-small.png"
                  alt="windbreaker jacket"
                />
              </div>
              <div class="cc-column">
                <img
                  src="./Img/jacket-spesific/windbreaker-jacket-right.png"
                  alt="windbreaker jacket"
                />
              </div>
              <div class="cc-column">
                <img
                  src="./Img/jacket-spesific/windbreaker-jacket-left.png"
                  alt="windbreaker jacket"
                />
              </div>
            </div>
        `;
    document.querySelector(".colors-area").innerHTML = `
        <div class="colors-area-text cc-column">
              <div>${product.name}</div>
              <div>${product.price_html}</div>
            </div>
            <div class="color-area-selection">
              <div class="yellow-bg box"></div>
              <div class="green-bg box"></div>
              <div class="black-bg box"></div>
              <div class="grey-bg box"></div>
            </div>
            <div class="color-area-footer cc-column">
              <div>S M L</div>
              <button class="button-color" onclick="addToChart('yellow')">
                Add to chart
              </button>

              <div class="description cc-column">
                <div>Description</div>
                <div class="desk">Category</div>
                <div class="desk">Details</div>
              </div>
            </div>
        `;
  });
