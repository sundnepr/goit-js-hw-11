import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { NewsAPI } from '/js/pixabay-api';
import { articleTemplate } from '/js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
let gallery = new SimpleLightbox('.gallery a');

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

const newsApi = new NewsAPI();

// ==========================================
refs.formElem.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {

  e.preventDefault();
  showSpinner();

  newsApi.query = e.target.elements.query.value.trim();
  newsApi.page = 1;
  
  refs.articleListElem.innerHTML = '';
  
  const ok = newsApi.query.trim() !== '';
   if (!ok) {
        // hideLoader();
        iziToast.error({
            message: 'Info Search input must be filled!',
        });
        return;
    }

  try {
    const data = await newsApi.getArticles();
    console.log(data);
    console.log(data.total);
    if (data.total == 0) {
       iziToast.info({
      title: 'Sorry,',
      message: "there are no images matching your search query. Please try again!",
    });

    }
  
    newsApi.totalResult = data.totalResults;

    renderArticles(data.hits);
  } catch (err) {
    newsApi.totalResult = 0;
    iziToast.error({
      title: 'Error1',
      message: err.message,
    });
  }

  checkBtnStatus();
  hideSpinner();
}

function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}

function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
// ==========================================

function checkBtnStatus() {
  console.log(newsApi.totalResult);
  console.log(newsApi.page);
  const maxPage = Math.ceil(newsApi.totalResult / NewsAPI.PAGE_SIZE);
  const isLastPage = maxPage <= newsApi.page;
  if (isLastPage) {
    refs.btnLoadMore.classList.add('hidden');
  } else {
    // refs.btnLoadMore.classList.remove('hidden');
  }
}

// =======================

function showSpinner() {
  // refs.loadElem.classList.remove('hidden');
  // refs.btnLoadMore.classList.add('hidden');
}

function hideSpinner() {
  // refs.loadElem.classList.add('hidden');
  // refs.btnLoadMore.classList.remove('hidden');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});