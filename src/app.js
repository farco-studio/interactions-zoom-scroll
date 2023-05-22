import { cursorComponent } from "./cursor.js";
import { loadingIntro } from "./loading.js";

const isMobile = window.matchMedia("(max-width: 768px)").matches;
const introDelay = 600;

const init = () => {
  if (!isMobile) {
    cursorComponent();
  }

  setTimeout(() => {
    loadingIntro();

  }, introDelay);

};

init();
