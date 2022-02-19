var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// for image slider auto play

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 10000);
    }
    repeater();
  }
  repeat();

  let newEvent = ``
  

  let trendingEvents = `<article class="card"> 
  <a href="#">
   <img src="./images/5.jpg" alt="">
    <div class="content">
      <h2>A short heading</h2>
        <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
    </div>
  </a>
  </article>
  <article class="card">   
        <a href="#">       
          <img src="./images/6.jpg" alt="">
          <div class="content">
            <h2>A short heading</h2>
            <p>Short content.</p>
          </div>
        </a>
      </article>
      <article class="card">
      <a href="#">
        <img src="./images/7.jpg" alt="">
        <div class="content">
          <h2>A longer heading in this card</h2>
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
      </a>
    </article>
    <article class="card">
        <a href="#">
          <img src="./images/8.jpg" alt="">
          <div class="content">
            <h2>A short heading</h2>
              <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                  years ago. </p>
          </div>
        </a>
        </article>`;
let eventsToday = `<article class="card"> 
<a href="#">
  <img src="./images/1.jpg" alt="">
  <div class="content">
    <h2>A short heading</h2>
      <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
  </div>  
</a>        
</article>
<article class="card">  
      <a href="#">        
        <img src="./images/2.jpg" alt="">
        <div class="content">
          <h2>A short heading</h2>
          <p>Short content.</p>
        </div>
      </a>
    </article>
    <article class="card">
    <a href="#">
      <img src="./images/3.jpg" alt="">
      <div class="content">
        <h2>A longer heading in this card</h2>
          <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
              suggestion for reaching the North Pole by an aerostat.</p>
      </div>
    </a>
  </article>
  <article class="card">
      <a href="#">
        <img src="./images/4.jpg" alt="">
        <div class="content">
          <h2>A short heading</h2>
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                years ago. </p>
        </div>
      </a>
    </article>`;
let eventsThisweeknd = `<article class="card">
<a href="#">
  <img src="./images/9.jpg" alt="">
  <div class="content">
    <h2>A short heading</h2>
      <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
          years ago. </p>
  </div>
</a>
</article>
<article class="card"> 
      <a href="#">
       <img src="./images/10.jpg" alt="">
        <div class="content">
          <h2>A short heading</h2>
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
        </div>
      </a>
    </article>
    <article class="card">       
    <a href="#">  
      <img src="./images/11.jpg" alt="">
      <div class="content">
        <h2>A short heading</h2>
        <p>Short content.</p>
      </div>
    </a>
  </article>
  <article class="card">
      <a href="#">
        <img src="./images/12.jpg" alt="">
        <div class="content">
          <h2>A longer heading in this card</h2>
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
      </a>
    </article>`;
    let eventsThismonth=`<article class="card">
    <a href="#">
      <img src="./images/13.jpg" alt="">
      <div class="content">
        <h2>A short heading</h2>
          <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
              years ago. </p>
      </div>
    </a>
  </article>
  <article class="card">
      <a href="#">
        <img src="./images/15.jpg" alt="">
        <div class="content">
          <h2>A longer heading in this card</h2>
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
        </a>
    </article>`;
    let foodnDrink=`<article class="card"> 
    <a href="#">
      <img src="./images/1.jpg" alt="">
      <div class="content">
        <h2>A short heading</h2>
          <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
      </div>  
    </a>        
    </article>`;

let btn1 = document.getElementById("trending1");
let btn2 = document.getElementById("today");
let btn3 = document.getElementById("thisweeknd");
let btn4 = document.getElementById("thismonth");
let btn5 = document.getElementById("foodanddrink");

btn1.addEventListener("click", function () {
  document.querySelector(".cards").innerHTML = trendingEvents;
});
btn2.addEventListener("click", function () {
  document.querySelector(".cards").innerHTML = eventsToday;
});
btn3.addEventListener("click", function () {
  document.querySelector(".cards").innerHTML = eventsThisweeknd;
});
btn4.addEventListener("click", function () {
  document.querySelector(".cards").innerHTML = eventsThismonth;
});
btn5.addEventListener("click", function () {
  document.querySelector(".cards").innerHTML = foodnDrink;
});

