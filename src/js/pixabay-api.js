// https://pixabay.com/api/?key=44530588-77e4763ebb7280f93ce94dd82&q=yellow+flowers&image_type=photo

const BASE_URL = 'https://pixabay.com/';
const END_POINT = 'api/';
const KEY = '44530588-77e4763ebb7280f93ce94dd82';
const options = {
  // headers: {
  //   'Key': 'key=44530588-77e4763ebb7280f93ce94dd82',
  
  // },
};

export class NewsAPI {
  query = '';
  #pageSize = 10;
  page = 1;
  total_pages = 1;

  getArticles() {
    const PARAMS = new URLSearchParams({
      key: KEY,
      q: this.query,
      image_type:  "photo",
      orientation: "horizontal",
      safesearch: true,
    });
    
    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    console.log(url);
    return fetch(url, options).then(res => res.json());
  }

  get pageSize() {
    return this.#pageSize;
  }
}