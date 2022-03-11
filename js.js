const gallery = document.querySelector('.gallery');
let searchInput = document.querySelector('.searchForm--input');
const form = document.querySelector('form');
let searchValue;

async function curatedPhotos() {
  const auth = '563492ad6f91700001000001f2b6832ea4164cb59ba0cbb5532b3a27';
  const dataFetch = await fetch(
    'https://api.pexels.com/v1/curated?per_page=15',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    }
  );
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    console.log(photo);
    const galleryImg = document.createElement('div');
    galleryImg.classList.add('gallery-img');
    galleryImg.innerHTML = `
          <img src='${photo.src.medium}'></img>
          <p>${photo.photographer}</p>
      `;
    gallery.appendChild(galleryImg);
  });
}

async function searchPhotos(query) {
  const auth = '563492ad6f91700001000001f2b6832ea4164cb59ba0cbb5532b3a27';
  const dataFetch = await fetch(
    `https://api.pexels.com/v1/search?${query}=nature&per_page=15`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    }
  );
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    console.log(photo);
    const galleryImg = document.createElement('div');
    galleryImg.classList.add('gallery-img');
    galleryImg.innerHTML = `
            <img src='${photo.src.medium}'></img>
            <p>${photo.photographer}</p>
        `;
    gallery.appendChild(galleryImg);
  });
}

function changeSearchInput(e) {
  searchValue = e.target.value;
  console.log(searchValue);
}

curatedPhotos();
//add event listeners
searchInput.addEventListener('input', changeSearchInput);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchPhotos(searchValue);
});
