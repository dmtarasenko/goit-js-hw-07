import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector("div.gallery");

galleryItemsCreator(galleryItems);

function galleryItemsCreator(items) {
  const gallaryMarkup = items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}" 
                    alt="${description}"   
                />
            </a>`
    )
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", gallaryMarkup);
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
  caption: true,
  nav: true,
});
