import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector("div.gallery");

galleryEl.addEventListener("click", onImageGalleryClick);

galleryItemsCreator(galleryItems);

function galleryItemsCreator(items) {
  let gallaryMarkup = "";

  gallaryMarkup = items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`
    )
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", gallaryMarkup);
}

function onImageGalleryClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const originalImageLink = e.target.dataset.source;
}
