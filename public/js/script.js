import { Scroll } from "./module/Scroll.js";
import { MouseMove } from "./module/MouseMove.js";

const home = document.getElementById("home");

AOS.init();
const scroll = new Scroll();
const mouse = new MouseMove();

function main(scroll, mouse) {
  mouse.onMouseMove(home, (e) => {
    for (const layyer of mouse.img) {
      const speed = layyer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layyer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  });

  scroll.onScrol(() => {
    let value = window.scrollY;

    for (const layyer of scroll.img) {
      layyer.style.top = `${value * 0.5}px`;
    }

    scroll.nav.classList.toggle("sticky", value > 0);
  });

  mouse.onMouseMove(window, () => {
    var x = Math.round((event.clientX * 50) / window.innerWidth);
    var y = Math.round((event.clientY * 80) / window.innerHeight);
    for (const eye of mouse.eye) {
      eye.style.left = `${x}%`;
      eye.style.top = `${y}%`;
    }
  });
}

main(scroll, mouse);
