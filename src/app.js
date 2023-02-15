import { setCursor } from "./cursor.js";
import { loadingIntro } from "./loading.js";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const init = () => {
  if (!isMobile) {
    setCursor();
  }

  loadingIntro();
};

init();
