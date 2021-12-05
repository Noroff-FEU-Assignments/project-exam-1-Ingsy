var modal = document.querySelector("#myModal");
var modalContent = document.querySelector("#modal-content");

function showModalContent(img) {
  modal.style.display = "block";
  console.log(img);
  modalContent.innerHTML = `<img class="img-modal" src="${img.src}" alt="${img.alt}"/>`;
}

window.onclick = function (event) {
  if (event.target == modalContent) {
    modal.style.display = "none";
  }
};
