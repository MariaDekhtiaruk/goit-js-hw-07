import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryWrapper = document.querySelector(`.gallery`);
const previewImages = createGaleryImg(galleryItems);
galleryWrapper.insertAdjacentHTML('beforeend', previewImages);
let instance = null;

function onClick(evt) {
  evt.preventDefault();
  const previewImage = evt.target;

  if (previewImage.nodeName !== `IMG`) {
    return;
  }
  console.log(previewImage.attributes[`data-source`]);
  instance = basicLightbox.create(`
    <div class="modal">
        <img src = "${previewImage.getAttribute(`data-source`)}"> 
    </div>
    `);

  instance.show();
}
galleryWrapper.addEventListener(`keydown`, onEscapePress);

function onEscapePress(evt) {
  console.log(evt.key);
  if (evt.key === 'Escape') {
    instance.close();
  }
}

function createGaleryImg(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= "${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

galleryWrapper.addEventListener(`click`, onClick);
