document.addEventListener("DOMContentLoaded", function() {
  const list = ["kepek/dog.png", "kepek/pig.png", "kepek/avatar_beuke.png"];
  const avatars = document.querySelectorAll('.avatar');

  avatars.forEach(function(avatar) {
    avatar.addEventListener("click", function(event) {
      let id = event.target.id;
      const aktElem = document.querySelector(".megjelen");
      if (aktElem) {
        aktElem.src = list[id];
      }
    });
  });
});
