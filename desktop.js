// ===============================
// AUDIO GLOBAL (XP STYLE)
// ===============================

const audios = [];
let muted = false;

// Startup sound
const startupSound = new Audio("assets/Audios/Startup-Sound.mp3");
startupSound.volume = 0.6;
audios.push(startupSound);

window.addEventListener("load", () => {
  startupSound.play();
});

// Click sound
const clickSound = new Audio("assets/Audios/Click-Sound.mp3");
clickSound.volume = 0.5;
audios.push(clickSound);

// ===============================
// ICONOS DEL ESCRITORIO
// ===============================

const icons = document.querySelectorAll(".icon");
const aboutWindow = document.getElementById("about");
const experienceWindow = document.getElementById("experience");
const profile = document.getElementById("profile-window");

icons.forEach(icon => {
  icon.addEventListener("click", () => {

    clickSound.currentTime = 0;
    clickSound.play();

    const app = icon.dataset.app;

    // cerrar ventanas abiertas
    document.querySelectorAll(".xp-window").forEach(win=>{
      if(!win.classList.contains("persistent-window")){
        win.style.display = "none";
      }
    });

    // abrir ventana seleccionada
    const target = document.getElementById(app);

    if(target){
      target.style.display = "block";
      target.classList.add("maximized");
    }

  });
});

const aboutCloseButtons = document.querySelectorAll(".about-close");

aboutCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    aboutWindow.style.display = "none";
  });
});

const experienceCloseButtons = document.querySelectorAll(".experience-close");

// ===============================
// CERRAR DISEÑO GRAFICO
// ===============================

const webWindow = document.getElementById("web");
const webCloseButtons = document.querySelectorAll(".web-close");

const toolsWindow = document.getElementById("tools");
const certsWindow = document.getElementById("certs");
const contactWindow = document.getElementById("contact");
const contactCloseButtons = document.querySelectorAll(".contact-close");

contactCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    contactWindow.style.display = "none";
  });
});
const certsCloseButtons = document.querySelectorAll(".certs-close");

certsCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    certsWindow.style.display = "none";
  });
});
const toolsCloseButtons = document.querySelectorAll(".tools-close");

toolsCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    toolsWindow.style.display = "none";
  });
});

webCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    webWindow.style.display = "none";
  });
});
const designWindow = document.getElementById("design");

const designCloseButtons = document.querySelectorAll(".design-close");

designCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    designWindow.style.display = "none";
  });
});

experienceCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    experienceWindow.style.display = "none";
  });
});
// ===============================
// BOTÓN OK → WHATSAPP
// ===============================

const okButton = document.querySelector(".xp-ok");

if (okButton) {
  okButton.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    const telefono = "524424909994";
    const mensaje = encodeURIComponent(
      "Hola, me interesó tu CV y me gustaría platicar contigo."
    );

    window.open(
      `https://wa.me/${telefono}?text=${mensaje}`,
      "_blank"
    );
  });
}

// ===============================
// BOTONES XP (MINIMIZAR / MAX / CERRAR)
// ===============================

document.querySelectorAll(".xp-window").forEach(windowEl => {

const isPersistent = windowEl.classList.contains("persistent-window");
const isPortfolio = windowEl.id === "portfolio";

function bounceWindow(){
  windowEl.classList.add("xp-minimizing");

  setTimeout(()=>{
    windowEl.classList.remove("xp-minimizing");
    windowEl.classList.add("xp-restoring");

    setTimeout(()=>{
      windowEl.classList.remove("xp-restoring");
    },600);

  },600);
}

  const buttons = windowEl.querySelectorAll(".xp-btn");

  const btnMin = buttons[0];
  const btnMax = buttons[1];
  const btnClose = buttons[2];

  // BOTON MINIMIZAR
  if(btnMin){
    btnMin.addEventListener("click", () => {

      clickSound.currentTime = 0;
      clickSound.play();

if(isPersistent){
  bounceWindow();
}else{
if(isPortfolio){
  windowEl.style.display = "none";
}
else{

  windowEl.classList.add("xp-minimizing");

  setTimeout(() => {
    windowEl.classList.remove("xp-minimizing");
    windowEl.style.display = "none";
  }, 600);

}
}

    });
  }

  // BOTON MAXIMIZAR
  if(btnMax){
    btnMax.addEventListener("click", () => {

clickSound.currentTime = 0;
clickSound.play();

if(isPersistent){
  bounceWindow();
}
else if(isPortfolio){
  windowEl.style.display = "none";
}

    });
  }

// BOTON CERRAR
if(btnClose){
  btnClose.addEventListener("click", () => {

    clickSound.currentTime = 0;
    clickSound.play();

    // SI ES LA VENTANA DE GERARDO
    if(windowEl.classList.contains("persistent-window")){

      windowEl.classList.add("xp-minimizing");

      setTimeout(() => {
        windowEl.classList.remove("xp-minimizing");
        windowEl.classList.add("xp-restoring");

        setTimeout(()=>{
          windowEl.classList.remove("xp-restoring");
        },600);

      },600);

    } 
    else {

      windowEl.style.display = "none";

    }

  });
}

});
// ===============================
// VOLUMEN (MUTE / UNMUTE)
// ===============================

const volumeToggle = document.getElementById("volumeToggle");

if (volumeToggle) {
  volumeToggle.addEventListener("click", () => {
    muted = !muted;

    audios.forEach(audio => {
      audio.muted = muted;
    });

    volumeToggle.src = muted
      ? "assets/Interfaz/Iconos/mute.png"
      : "assets/Interfaz/Iconos/Sonido.png";
  });
}

// ===============================
// RELOJ XP (AM / PM)
// ===============================

const clockTime = document.querySelector(".clock-time");

function updateClock() {
  if (!clockTime) return;

  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  clockTime.textContent = `${hours}:${minutes} ${period}`;
}

updateClock();
setInterval(updateClock, 1000);

// ===============================
// ASISTENTE INTELIGENTE
// ===============================

const assistantBubble = document.getElementById("assistant-bubble");
const assistantContent = assistantBubble.querySelector(".assistant-content");
const assistantClose = document.querySelector(".bubble-close");

const inactivityTime = 15000; // 15 segundos después de cerrar

let inactivityTimer;
let assistantStarted = false; // controla si ya cerraron el primer mensaje

// 🎲 Mensajes aleatorios
const assistantMessages = [
  "Puedes navegar libremente por los archivos.",
  "Mi trayectoria está organizada en <strong>Experiencia.txt</strong>",
  "Algunas muestras están en <strong>Portafolio.tiff</strong>",
  "Si deseas contactarme, abre <strong>Contacto.xlsx</strong>"
];

// Mostrar mensaje random
function showAssistantMessage() {
  const randomMessage =
    assistantMessages[Math.floor(Math.random() * assistantMessages.length)];

  assistantContent.innerHTML = randomMessage;
  assistantBubble.style.display = "block";
}

// Reiniciar contador de inactividad
function startInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(showAssistantMessage, inactivityTime);
}

// Detectar actividad (solo después del primer cierre)
function handleActivity() {
  if (!assistantStarted) return;
  startInactivityTimer();
}

["click", "mousemove", "keydown"].forEach(event => {
  document.addEventListener(event, handleActivity);
});

// Mostrar mensaje inicial después de 3.6 segundos
window.addEventListener("load", () => {
  setTimeout(() => {
    assistantBubble.style.display = "block";
  }, 3600);
});

// Cerrar burbuja
assistantClose.addEventListener("click", () => {
  assistantBubble.style.display = "none";

  // Activar sistema de inactividad después del primer cierre
  if (!assistantStarted) {
    assistantStarted = true;
  }

  startInactivityTimer();
});

// ===============================
// VISOR DE IMAGENES
// ===============================

window.addEventListener("load", () => {

let galleryImages = [];

const viewer = document.getElementById("image-viewer");
const viewerImage = document.getElementById("viewer-image");

const btnClose = document.getElementById("viewer-close");
const btnNext = document.getElementById("viewer-next");
const btnPrev = document.getElementById("viewer-prev");
const viewerOverlay = document.querySelector(".viewer-overlay");

let currentImage = 0;

// abrir visor

document.querySelectorAll(".gallery-item img, .web-preview, .portfolio-item img").forEach((img) => {

  img.addEventListener("click", () => {

    const gallery = img.dataset.gallery || "grafico";

galleryImages = Array.from(document.querySelectorAll(`img[data-gallery="${gallery}"]`));

currentImage = galleryImages.indexOf(img);

    if(img.dataset.full){
      viewerImage.src = img.dataset.full;
    } else {
      viewerImage.src = img.src.replace("/Previsualizacion","");
    }

    viewer.style.display = "flex";

  });

});

// cerrar

btnClose.addEventListener("click", () => {

  viewer.style.display = "none";

});

// cerrar al hacer click fuera de la imagen

viewerOverlay.addEventListener("click", () => {

  viewer.style.display = "none";

});

// siguiente

btnNext.addEventListener("click", () => {

  currentImage++;

  if(currentImage >= galleryImages.length){
    currentImage = 0;
  }

const img = galleryImages[currentImage];

viewerImage.src = img.dataset.full
  ? img.dataset.full
  : img.src.replace("/Previsualizacion","");

});

// anterior

btnPrev.addEventListener("click", () => {

  currentImage--;

  if(currentImage < 0){
    currentImage = galleryImages.length - 1;
  }

const img = galleryImages[currentImage];

viewerImage.src = img.dataset.full
  ? img.dataset.full
  : img.src.replace("/Previsualizacion","");

});

});

// ================= PREVIEW WEB -> VISOR =================

document.querySelectorAll(".web-preview").forEach(img => {

img.addEventListener("click", () => {

const viewer = document.getElementById("image-viewer");
const viewerImg = document.getElementById("viewer-image");

viewerImg.src = img.dataset.full;

viewer.style.display = "flex";

});

});

if(window.innerWidth <= 768){

const videos = [
"https://youtu.be/XOSe9pWWQSI",
"https://youtu.be/MxNl6c6gjtE",
"https://youtu.be/Dpz3iqGJICc",
"https://youtu.be/J491mF9cs6s",
"https://youtu.be/0FeQGHVEFFc",
"https://youtu.be/eiwBndLEKqk"
];

document.querySelectorAll(".video-gallery .portfolio-item")
.forEach((item,index)=>{

item.addEventListener("click",()=>{
window.open(videos[index],"_blank");
});

});

}

