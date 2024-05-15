//const overlay = document.getElementById('ovrl');
const exitB = document.getElementById("eb");
const ovrI = document.getElementById("oi");
const ovrT = document.getElementById("ot");
const ovrB = document.getElementById("ob");

//const c = document.getElementById('ovrl').children;

//let overlayed = false;

document.querySelectorAll(".quad__button").forEach((item) => {
  item.addEventListener("click", (event) => {
    //toggleOverlay();
    showOverlay();
  });
});

exitB.addEventListener("click", (event) => {
  //toggleOverlay();
  hideOverlay();
});

function showOverlay() {
  exitB.classList.add("enter-button");
  ovrI.classList.add("enter-img");
  ovrT.classList.add("enter");
  ovrB.classList.add("enter");
}

function hideOverlay() {
  exitB.classList.remove("enter-button");
  ovrI.classList.remove("enter-img");
  ovrT.classList.remove("enter");
  ovrB.classList.remove("enter");
}

function toggleOverlay() {
  if (!overlayed) {
    overlay.style.visibility = "visible";
    overlayed = true;
  } else {
    overlay.style.visibility = "hidden";
    overlayed = false;
  }
}
