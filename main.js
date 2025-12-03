
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
//conten autoScroll open
const box = document.getElementById("autoScroll");
let arah = 1; // 1 = kanan, -1 = kiri

setInterval(() => {
  const max = box.scrollWidth - box.clientWidth;
  if (box.scrollLeft >= max-1) {
    arah = -1; // balik ke kiri
  } else if (box.scrollLeft <= 0) {
    arah = 1; // balik ke kanan
  }

  box.scrollLeft += 2 * arah; // gerak sesuai arah
}, 1);

//conten autoScroll close
//##########################################################################


function checkMode() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  if (h > w && h < 600) {
    console.log("Small Portrait");
  } 
  else if (h > w && h >= 600) {
    console.log("Large Portrait");
  }
  else if (w > h && h < 450) {
    console.log("Landscape Mobile");
  }
  else {
    console.log("Desktop / Large Screen");
  }
}

checkMode();
window.addEventListener("resize", checkMode);
