const scroll = document.querySelector(".content-card");
let isDragStart = false, prevPageX, prevScrollLeft;


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = scroll.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    scroll.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

scroll.addEventListener("mousedown", dragStart);
scroll.addEventListener("mousemove", dragging);
scroll.addEventListener("mouseup", dragStop);

scroll.addEventListener("touchstart", dragStart);
scroll.addEventListener("touchmove", dragging);
scroll.addEventListener("touchend", dragStop);
