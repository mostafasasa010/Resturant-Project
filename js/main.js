let toggoler = document.querySelector(".toggoler");
let toggolerLinks = document.querySelector(".toggole-links");

toggoler.onclick = () => {
  toggoler.classList.toggle("active");
  toggolerLinks.classList.toggle("active");
};

let btnHeader = document.querySelector(".header .button");
let closeBtn = document.querySelector(".book-main span");
let bookWidget = document.querySelector(".book-widget");

btnHeader.onclick = () => {
  btnHeader.classList.toggle("active");
  bookWidget.classList.toggle("active");
};

closeBtn.onclick = () => {
  btnHeader.classList.toggle("active");
  bookWidget.classList.toggle("active");
};

const links = document.querySelectorAll(".pan-gallery .top p");
const imgs = document.querySelectorAll(".pan-gallery .main img");

links.forEach((li) => {
  li.addEventListener("click", (e) => {
    links.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    imgs.forEach((img) => {
      img.style.display = "none";
      document
        .querySelectorAll(`.pan-gallery .main img.${e.target.dataset.li}`)
        .forEach((e) => {
          e.style.display = "block";
        });
    });
  });
});

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgs.forEach((img) => {
      img.classList.remove("active");
    });
    e.target.classList.add("active");
    let widget = document.createElement("div");
    let main = document.createElement("div");
    let close = document.createElement("span");
    let img = document.createElement("img");
    widget.className = "widget";
    img.src = e.target.src;
    close.textContent = "X";
    document.body.appendChild(widget);
    widget.appendChild(main);
    main.appendChild(close);
    main.appendChild(img);
    close.onclick = () => {
      widget.remove();
    };
  });
});
