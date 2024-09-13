class Lesson {
  #data;
  #id;

  constructor(data, id, PARENT_ELEMENT) {
    this.#data = data;
    this.#id = id;

    let html = `
      <div class="card col-lg-3 col-md-4 col-sm-6 p-0" style="width:300px">
        <div class="card-img-body">
          <h4 class="card-title">${this.#data.title}<br></h4>
        </div>
        <iframe src="${this.#data.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p class="card-text">Description: ${this.#data.description} <br> </p>
        <button id="${this.#id}" type="button" class="btn btn-primary clicked black" data-bs-toggle="modal" data-bs-target="#myModal">Show</button>
      </div>
    `;

    PARENT_ELEMENT.insertAdjacentHTML('beforeend', html);

    this.BUTTON = PARENT_ELEMENT.querySelector(".clicked:last-child");

    this.BUTTON.addEventListener("click", () => {
      const MODAL_HEADER = document.querySelector(".modal-title");
      MODAL_HEADER.innerHTML = `<h1>${this.#data.title}</h1>`;
      const MODAL_BODY = document.querySelector(".modal-body");
      MODAL_BODY.innerHTML = `
        <iframe src="${this.#data.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br>
        <br>
        <p>
          <h2>Video text:</h2>
          ${this.#data.text}
        </p>
        <br>
        <br>
        <h2>Memory game: Coming Soon</h2><br>
        <h2>Quiz: Coming Soon<br></h2>
      `;
    });
  }
}

export default Lesson;
