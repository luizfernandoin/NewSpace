const scroll = document.querySelector(".content-card");
let isDragStart = false;
let prevPageX, prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  if (e.type === "touchstart") {
    prevPageX = e.touches[0].pageX;
  } else {
    prevPageX = e.pageX;
  }
  prevScrollLeft = scroll.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff;
  if (e.type === "touchmove") {
    positionDiff = e.touches[0].pageX - prevPageX;
  } else {
    positionDiff = e.pageX - prevPageX;
  }
  scroll.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

scroll.addEventListener("mousedown", dragStart);
scroll.addEventListener("mousemove", dragging);
scroll.addEventListener("mouseup", dragStop);

scroll.addEventListener("touchstart", dragStart);
scroll.addEventListener("touchmove", dragging);
scroll.addEventListener("touchend", dragStop);