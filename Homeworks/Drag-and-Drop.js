let image = document.querySelector("img");
let container_boxes = document.querySelectorAll(".boxes");
image.ondragstart = (e) => {
  e.target.border = "3px solid blue";
  e.target.borderRadius = "7px";
  setTimeout(() => {
    e.target.display = "none";
  }, 0);
}

image.ondragend = (e) => {
  e.target.style.display = "inline-block";
}

for (empty_box of container_boxes) {
  empty_box.ondragover = (e) => {
    e.preventDefault();
  }
  empty_box.ondragenter = (e) => {
    e.target.style.border = "2px dashed";
  }
  empty_box.ondragleave = (e) => {
    e.target.style.border = "2px solid yellow";
  }
  empty_box.ondrop = (e) => {
    e.target.append(image);
  }
}