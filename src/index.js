var mouse_x;
var mouse_y;
window.addEventListener("mousemove", (e) => {
  var obg = document.querySelector(".object");
  var cur = document.querySelector(".cursor");
  cur.style.left = e.pageX + "px";
  cur.style.top = e.pageY + "px";
  setTimeout(() => {
    obg.style.left = e.pageX + "px";
    obg.style.top = e.pageY + "px";
  }, 50);
});
const debounce = function (e, i, s) {
  let c;
  return function (...t) {
    const n = this,
      d = s && !c;
    clearTimeout(c),
      (c = setTimeout(function () {
        (c = null), s || e.apply(n, t);
      }, i)),
      d && e.apply(n, t);
  };
};
let active = 0;
const sections = document.querySelectorAll("section");
function hideShow(e, i) {
  sections.forEach((s, c) => {
    c != i &&
      (1 === e
        ? (s.children[0].classList.add("hidden"),
          s.children[1].classList.add("hidden"))
        : (s.children[0].classList.remove("hidden"),
          s.children[1].classList.remove("hidden")));
  });
}
function getOriginal2(e) {
  let s = e;
  return e + 1 === sections.length ? (s = 0) : (s = e);
}
function getOriginal(e) {
  let s = e;
  return (
    e + 2 === sections.length - 1 + 1
      ? (s = -2)
      : e + 2 === sections.length - 1 + 2 && (s = -1),
    s
  );
}
function reposition(original) {
  document.querySelectorAll("[class^=reposition]").forEach((e) => {
    e.classList.remove("repositionTop1");
    e.classList.remove("repositionTop2");
    e.classList.remove("repositionBot1");
    e.classList.remove("repositionBot2");
  });
  document
    .querySelector(`#section2`)
    .children[0].classList.remove("repositionTop1");
  document
    .querySelector(`#section2`)
    .children[1].classList.remove("repositionTop2");
  document
    .querySelector(`#section2`)
    .children[0].classList.remove("repositionBot1");
  document
    .querySelector(`#section2`)
    .children[1].classList.remove("repositionBot2");
  document
    .querySelector(`#section2`)
    .children[1].classList.remove("repositionTop1");
  document
    .querySelector(`#section2`)
    .children[0].classList.remove("repositionTop2");
  document
    .querySelector(`#section2`)
    .children[1].classList.remove("repositionBot1");
  document
    .querySelector(`#section2`)
    .children[0].classList.remove("repositionBot2");
  const el1 = document.querySelector(`#section1`);
  const el2 = document.querySelector(`#section3`);
  // console.log(s1 + 1, s2 + 1, el1, el2);
  el1.children[0].classList.add("repositionTop1");
  el1.children[1].classList.add("repositionTop2");
  el2.children[0].classList.add("repositionBot1");
  el2.children[1].classList.add("repositionBot2");
}
function verify(e) {
  // 1 sobe -1 desce
  var wheelDeltaY = e.wheelDeltaY;
  if (!wheelDeltaY) {
    var new_mouse_y = e.changedTouches[0].pageY || e.pageY;
    if (new_mouse_y - mouse_y > 75) {
      wheelDeltaY = 1;
    } else if (new_mouse_y - mouse_y < -75) {
      wheelDeltaY = -1;
    }
  }
  switch (
    (("pHover" != sections[getOriginal(active) + 2].children[0].classList[0] &&
      "imgHover" !=
        sections[getOriginal(active) + 2].children[2].classList[0]) ||
      (sections[getOriginal(active) + 2].children[0].classList.remove("pHover"),
      sections[getOriginal(active) + 2].children[2].classList.remove(
        "imgHover"
      ),
      sections[getOriginal(active) + 2].children[1].classList.remove("pHover"),
      hideShow(0, getOriginal(active) + 2)),
    wheelDeltaY < 0
      ? active === sections.length - 1
        ? (active = 0)
        : (active += 1)
      : 0 === active
      ? (active = sections.length - 1)
      : (active -= 1),
    active)
  ) {
    case 0:
      (sections[0].id = "section0"),
        (sections[1].id = "section1"),
        (sections[2].id = "section2"),
        (sections[3].id = "section3"),
        (sections[4].id = "section4"),
        (sections[5].id = "section5"),
        reposition(2),
        wheelDeltaY < 0
          ? (addOpacity(5), skewImage(1, 2))
          : (addOpacity(0), skewImage(3, 2));
      break;
    case 1:
      (sections[0].id = "section5"),
        (sections[1].id = "section0"),
        (sections[2].id = "section1"),
        (sections[3].id = "section2"),
        (sections[4].id = "section3"),
        (sections[5].id = "section4"),
        reposition(2),
        wheelDeltaY < 0
          ? (addOpacity(0), skewImage(2, 3))
          : (addOpacity(1), skewImage(4, 3));
      break;
    case 2:
      (sections[0].id = "section4"),
        (sections[1].id = "section5"),
        (sections[2].id = "section0"),
        (sections[3].id = "section1"),
        (sections[4].id = "section2"),
        (sections[5].id = "section3"),
        reposition(2),
        wheelDeltaY < 0
          ? (addOpacity(1), skewImage(3, 4))
          : (addOpacity(2), skewImage(5, 4));
      break;
    case 3:
      (sections[0].id = "section3"),
        (sections[1].id = "section4"),
        (sections[2].id = "section5"),
        (sections[3].id = "section0"),
        (sections[4].id = "section1"),
        (sections[5].id = "section2"),
        reposition(2),
        wheelDeltaY < 0
          ? (addOpacity(2), skewImage(4, 5))
          : (addOpacity(3), skewImage(0, 5));
      break;
    case 4:
      (sections[0].id = "section2"),
        (sections[1].id = "section3"),
        (sections[2].id = "section4"),
        (sections[3].id = "section5"),
        (sections[4].id = "section0"),
        (sections[5].id = "section1"),
        reposition(2),
        wheelDeltaY < 0
          ? (addOpacity(3), skewImage(5, 0))
          : (addOpacity(4), skewImage(1, 0));
      break;
    case 5:
      (sections[0].id = "section1"),
        (sections[1].id = "section2"),
        (sections[2].id = "section3"),
        (sections[3].id = "section4"),
        (sections[4].id = "section5"),
        (sections[5].id = "section0"),
        reposition(2),
        wheelDeltaY < 0
          ? (addOpacity(4), skewImage(0, 1))
          : (addOpacity(5), skewImage(2, 1));
  }
  document.querySelector("#actual").innerHTML =
    active == 0 ? "01" : active == 1 ? "02" : "03";
  document.querySelector("#stepName").innerHTML =
    active == 0 ? "Sobre mim" : active == 1 ? "Por que?" : "Portfólio";
  changeStyles(getOriginal(active));
}
function skewImage(e, i) {
  sections[e].children[2].classList.add("skewed"),
    setTimeout(() => sections[i].children[2].classList.remove("skewed"), 600);
}
function addOpacity(e) {
  sections[e].classList.add("hidden"),
    setTimeout(() => {
      sections[e].classList.remove("hidden");
    }, 1000);
}
function changeStyles(e, i) {
  sections.forEach((i, s) => {
    e + 2 === s
      ? (i.children[1].classList.remove("bordered"),
        i.children[0].classList.remove("bordered"))
      : (i.children[0].classList.add("bordered"),
        i.children[1].classList.add("bordered"));
  });
}
function first(e) {
  sections.forEach((i, s) => {
    e + 2 === s
      ? (i.children[0].classList.remove("bordered"),
        i.children[1].classList.remove("bordered"),
        i.children[2].classList.remove("hidden"),
        i.children[2].classList.remove("skewed"))
      : (i.children[1].classList.add("bordered"),
        i.children[0].classList.add("bordered"));
  });
}
function addAnime(e, i) {
  getOriginal(active) + 2 == i &&
    (e.children[0].classList.add("pHover"),
    e.children[1].classList.add("pHover"),
    e.children[2].classList.add("imgHover"),
    hideShow(1, i));
}
function removeAnime(e, i) {
  getOriginal(active) + 2 == i &&
    (e.children[0].classList.remove("pHover"),
    e.children[1].classList.remove("pHover"),
    e.children[2].classList.remove("imgHover"),
    hideShow(0, i));
}
sections.forEach((e, i) => {
  e.children[0].addEventListener("mouseover", () => {
    addAnime(e, i);
  });
  e.children[0].addEventListener("mouseout", () => {
    removeAnime(e, i);
  });
  e.children[1].addEventListener("mouseover", () => {
    addAnime(e, i);
  });
  e.children[1].addEventListener("mouseout", () => {
    removeAnime(e, i);
  });
  e.children[2].addEventListener("mouseover", () => {
    addAnime(e, i);
  });
  e.children[2].addEventListener("mouseout", () => {
    removeAnime(e, i);
  });
});
function get_mouse_coords(e) {
  mouse_x = e.pageX;
  mouse_y = e.changedTouches[0].pageY || e.pageY;
}
window.addEventListener(
  "mousewheel",
  debounce((e) => verify(e), 500)
);
window.addEventListener("touchstart", get_mouse_coords, false);
window.addEventListener(
  "touchmove",
  debounce((e) => verify(e), 500)
);
first(active);
