export class MouseMove {
  constructor() {
    this.img = document.getElementsByClassName("img-parallax");
    this.eye = document.querySelectorAll(".eye");
  }

  onMouseMove(parent, cb) {
    parent.addEventListener("mousemove", cb);
  }
}
