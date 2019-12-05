import store from "../store.js";

let _gifsApi = axios.create({
  baseURL: "//api.giphy.com/v1/gifs",
  timeout: 3000
});

let _sandbox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/class/spells",
  timeout: 3000
});

class GifsService {
  constructor() {
    console.log("hello from service");
  }

  async generateGifAsync() {
    let res = await _gifsApi.get(
      "random?api_key=hlQlhgZwbgH2WVIfOeaofwo8QkYCtY9i&tag=dog"
    );
    console.log(res);
    store.commit("activeGif", res.data.data.image_mp4_url);
  }
}

const service = new GifsService();
export default service;
