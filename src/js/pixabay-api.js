// https://pixabay.com/api/?key=44530588-77e4763ebb7280f93ce94dd82&q=yellow+flowers&image_type=photo

const BASE_URL = 'https://pixabay.com/api/';
const END_POINT = '/search';
const options = {
  headers: {
    'Key': '44530588-77e4763ebb7280f93ce94dd82',
  
  },
};

export class NewsAPI {
  query = '';
  #pageSize = 10;
  page = 1;
  total_pages = 1;

  getArticles() {
    const PARAMS = new URLSearchParams({
      q: this.query,
      page_size: this.#pageSize,
      page: this.page,
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    return fetch(url, options).then(res => res.json());
  }

  get pageSize() {
    return this.#pageSize;
  }
}