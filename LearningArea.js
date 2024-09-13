import Lesson from "./Lesson.js";
import Async from "./Async.js";

class LearningArea {
  #endpoint;

  constructor() {
    const async = new Async();
    this.#endpoint = "lessons.json";
    async.fetchData(this.#endpoint, this.#displayItems.bind(this));
  }

  #displayItems(data) {
    const LIST = data.lessons;
    const ARTICLE = document.querySelector("article");

    LIST.forEach((item, index) => {
      new Lesson(item, index, ARTICLE);
    });
  }
}

export default LearningArea;
