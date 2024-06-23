// key = 44530588-77e4763ebb7280f93ce94dd82
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { NewsAPI } from '/js/pixabay-api';

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

  console.log("submit ok");

  e.preventDefault();
  showSpinner();

  const query = e.target.elements.query.value.trim();
  newsApi.page = 1;
  newsApi.query = query;
  // refs.articleListElem.innerHTML = '';
  try {
    const data = await newsApi.getArticles();
    console.log(data);
    newsApi.totalResult = data.totalResults;
    renderArticles(data.hits);
  } catch (err) {
    newsApi.totalResult = 0;
    iziToast.error({
      title: 'Error',
      message: err.message,
    });
  }

  checkBtnStatus();
  hideSpinner();
}
// ==========================================

// refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

// async function onLoadMoreClick() {
//   showSpinner();
//   newsApi.page += 1;
//   const data = await newsApi.getArticles();
//   renderArticles(data.articles);
//   checkBtnStatus();
//   hideSpinner();
// }

// ==========================================
function articleTemplate(article) {
  const { userImageURL,likes} = article;
  return `<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${userImageURL}"
    alt=""
  />
  <h3 class="card-title">
    ${likes}
  </h3>
  // <p class="card-desc">
  // ${likes}
  // </p>
  // <div class="card-footer">
  //   <span>${likes}</span>
  //   <span>${likes}</span>
  // </div>
</li>
`;
}

function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}

function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}
// ==========================================

/* function checkBtnStatus() {
  const maxPage = Math.ceil(newsApi.totalResult / NewsAPI.PAGE_SIZE);
  const isLastPage = maxPage === newsApi.page;
  refs.btnLoadMore.disabled = isLastPage;
} */

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