export default class instaService {
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Нет ответа ${url}; получили ошибку ${response.status}`);
    }

    return await response.json();
  }

  getAllPosts = async () => {
    const response = await this.getResource('/posts/');
    return response;
  }
}