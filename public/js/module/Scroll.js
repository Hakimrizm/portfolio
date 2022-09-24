export class Scroll {
  constructor() {
    this.nav = document.getElementsByTagName("nav")[0];
    this.img = document.getElementsByClassName("img-parallax");
  }

  onScrol(cb) {
    window.addEventListener("scroll", cb);
  }
}
