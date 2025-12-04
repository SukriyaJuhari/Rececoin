// --------------------------
// THEME TOGGLE
// --------------------------
const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});




//from registrasi function open/ 
function showRegister() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}
//from registrasi function close/ 
//##########################################################################


let injectHtml = `
  <div class="autoScroll"> 
      <div class="item"><img src="assets/img/IMG_20251203_151105.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151147.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151235.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151326.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151422.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151537.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151622.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151729.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151826.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151910.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_151947.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
      <div class="item"><img src="assets/img/IMG_20251203_152039.jpg" alt="item"><b>Clash of Clans <br> $10</b></div>
  </div>
`;

let deskAutoScrol = document.getElementById("deskAutoScroll");
let mobileAutoScrol = document.getElementById("mobileAutoScroll");

//conten autoScroll open
function startAutoScroll(box) {
  let arah = 1;
  setInterval(() => {
    const max = box.scrollWidth - box.clientWidth;
    if (box.scrollLeft >= max - 1) arah = -1;
    else if (box.scrollLeft <= 0) arah = 1;
    box.scrollLeft += 2 * arah;
    
  }, 1);
}

//conten autoScroll close


function checkMode() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  if (h > w && h >= 600) {
    deskAutoScrol.style.display = "none";

    mobileAutoScrol.innerHTML = injectHtml;
    mobileAutoScrol.style.display = "block";

    // jalankan auto-scroll pada elemen baru
    const box = mobileAutoScrol.querySelector(".autoScroll");
    if (box) startAutoScroll(box);
    
    console.log("Large Portrait");
  }
  else if (w > h && h < 450) {
    console.log("Landscape Mobile");
    mobileAutoScrol.style.display = "none";

    deskAutoScrol.innerHTML = injectHtml;
    deskAutoScrol.style.display = "block";

    const box = deskAutoScrol.querySelector(".autoScroll");
    if (box) startAutoScroll(box);
  }
  else {
    console.log("Desktop / Large Screen");
    mobileAutoScrol.style.display = "none";

    deskAutoScrol.innerHTML = injectHtml;
    deskAutoScrol.style.display = "block";

    const box = deskAutoScrol.querySelector(".autoScroll");
    if (box) startAutoScroll(box);
  }
}

checkMode();
window.addEventListener("resize", checkMode);


//##########################################################################
