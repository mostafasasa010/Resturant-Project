let toggoler = document.querySelector(".toggoler");
let toggolerLinks = document.querySelector(".toggole-links");

toggoler.onclick = () => {
  toggoler.classList.toggle("active");
  toggolerLinks.classList.toggle("active");
};
