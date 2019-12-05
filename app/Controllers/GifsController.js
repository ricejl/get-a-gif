import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _drawActiveGif() {
  let gif = store.State.activeGif;
  console.log(gif);
  document.getElementById("display-gif").innerHTML = gif.Template;
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("activeGifs", _drawActiveGif);
  }

  async generateGifAsync() {
    try {
      await GifsService.generateGifAsync();
    } catch (err) {
      console.error(err);
    }
  }
}
