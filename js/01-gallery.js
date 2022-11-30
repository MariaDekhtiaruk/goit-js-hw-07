import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector(`.gallery`);
const previewImages = createGaleryImg(galleryItems);
galleryWrapper.insertAdjacentHTML('beforeend', previewImages);

function onClick(evt) {
  evt.preventDefault();
  const previewImage = evt.target;

  if (previewImage.nodeName !== `IMG`) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src = "${previewImage.getAttribute(`data-source`)}"> 
    </div>
    `,
    {
      onShow: () => {
        document.addEventListener(`keydown`, onEscapePress);
      },
      onClose: () => {
        document.removeEventListener(`keydown`, onEscapePress);
      },
    }
  );

  const onEscapePress = (evt) => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  };

  instance.show();
}

function createGaleryImg(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
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
