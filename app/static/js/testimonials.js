let count = 1;

setInterval( function(){
  nextTestimonial();
}, 10000)

function nextTestimonial(){
  document.getElementById("slide"+count).classList.add("active");
  document.getElementById("slide"+3).classList.remove("active");
  count++;
  if(count > 3){
    document.getElementById("slide"+1).classList.remove("active");
    document.getElementById("slide"+2).classList.remove("active");
    count = 1;
  }
}

/*
slide1 recebe active - slide 2
slide
*/