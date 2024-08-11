import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://github.com/versroot/somerferie2/blob/main/src/img/gdansk1.jpg?raw=true',
    original:
      'https://github.com/versroot/somerferie2/blob/main/src/img/gdansk1.jpg?raw=true',
    description: 'Gdansk--Polen',
  },
  {
    preview:
      'https://github.com/versroot/somerferie2/blob/main/src/img/turkey1.jpg?raw=true',
    original:
      'https://github.com/versroot/somerferie2/blob/main/src/img/turkey1.jpg?raw=true',
    description: 'Alania--Tyrkiet',
  },
  {
    preview:
      'https://github.com/versroot/somerferie2/blob/main/src/img/aarhus1.jpg?raw=true',
    original:
      'https://github.com/versroot/somerferie2/blob/main/src/img/aarhus1.jpg?raw=true',
    description: 'Aarhus--Denmark',
  },
];

const imagesMarkup = images
  .map(
    image =>
      `<li class="gallery-item">
  <a class="gallery-link" href=${image.original}> 
    <img
      class="gallery-image"
      src=${image.preview}

      alt=${image.description}
    />
  </a>
</li>`
  )
  .join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', imagesMarkup);

let lightboxgallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightboxgallery.on('show.simplelightbox', function () {});
