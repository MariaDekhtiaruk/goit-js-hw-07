import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryWrapper = document.querySelector(`.gallery`);
const previewImages = createGaleryImg(galleryItems);
galleryWrapper.insertAdjacentHTML('beforeend', previewImages);
let instance = null;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionSelector: `img`,
  captionPosition: `bottom`,
  captionDelay: 250,
});

function onEscapePress(evt) {
  console.log(evt.key);
  if (evt.key === 'Escape') {
    instance.close();
  }
}

function createGaleryImg(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src= "${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join('');
}
