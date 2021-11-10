function getPosts() {
  const url = "http://projectexamingsy.local/wp-json/wp/v2/posts/";
  fetch(url)
    .then((response) => response.json())
    .then((list) => {
      let html = "";
      for (let i = 0; i < list.length; i++) {
        const title = title.rendered;
        const text = content.rendered;

        const product = list[i];
        const id = product.id;
        const title = product.name;
        const description = product.short_description;
        const price = product.price_html;
        const imageUrl = product.images[0].src;
        const color = "red"; //product.attributes.color
        const div = `
              <div class="jacket">
                <a href="jacket-spesific.html?id=${id}"><img src="${imageUrl}" /></a>
                <button onclick="addToChart("${color}")">Add to chart</button>
                <span>${title}</span> </br>
                <span>${price}</span>
              </div>
            `;
        html = html + div;
      }
      document.querySelector(".container").innerHTML += html;
    })
    .catch((error) => {});
}

getProducts();
