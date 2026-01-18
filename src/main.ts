import "./styles/main.css";

const cvBtn = document.getElementById("cvBtn");
const menuBtn = document.querySelector(".menuBtn");
const navMenuList = document.querySelector(".navMenu");

cvBtn?.addEventListener("click", function () {
  console.log("cv");
  var cvWindow = window.open();

  if (!cvWindow) return;

  const pdfFrame = document.createElement("iframe");

  pdfFrame.src = "img/cv.pdf";
  pdfFrame.style = "width: 100%; height: 100%";

  cvWindow.document.body.appendChild(pdfFrame);
});

menuBtn?.addEventListener("click", () => {
  navMenuList?.classList.toggle("hidden");
});

type AvatarElements = {
  leftEyeOpen: HTMLElement;
  rightEyeOpen: HTMLElement;
  leftEyeClosed: HTMLElement;
  rightEyeClosed: HTMLElement;
  autoBtn: HTMLButtonElement;
};

const avatarController = {
  isBlinking: false as boolean,
  autoMode: true as boolean,
  autoTimeoutId: null as number | null,

  elements: {
    leftEyeOpen: document.getElementById("leftEyeOpen") as HTMLElement,
    rightEyeOpen: document.getElementById("rightEyeOpen") as HTMLElement,
    leftEyeClosed: document.getElementById("leftEyeClosed") as HTMLElement,
    rightEyeClosed: document.getElementById("rightEyeClosed") as HTMLElement,
    autoBtn: document.getElementById("autoBtn") as HTMLButtonElement,
  } as AvatarElements,

  // Göz kırpma animasyonu
  blink(): void {
    if (this.isBlinking) return;

    this.isBlinking = true;

    this.elements.leftEyeOpen.style.display = "none";
    this.elements.rightEyeOpen.style.display = "none";
    this.elements.leftEyeClosed.style.display = "block";
    this.elements.rightEyeClosed.style.display = "block";

    setTimeout(() => {
      this.elements.leftEyeOpen.style.display = "block";
      this.elements.rightEyeOpen.style.display = "block";
      this.elements.leftEyeClosed.style.display = "none";
      this.elements.rightEyeClosed.style.display = "none";
      this.isBlinking = false;
    }, 150);
  },

  // Otomatik modu aç/kapat
  toggleAuto(): void {
    this.autoMode = !this.autoMode;

    if (this.autoMode) {
      this.elements.autoBtn.textContent = "🔄 Otomatik: Açık";
      this.elements.autoBtn.classList.add("active");
      this.scheduleNextBlink();
    } else {
      this.elements.autoBtn.textContent = "⏸️ Otomatik: Kapalı";
      this.elements.autoBtn.classList.remove("active");

      if (this.autoTimeoutId !== null) {
        clearTimeout(this.autoTimeoutId);
        this.autoTimeoutId = null;
      }
    }
  },

  // Bir sonraki göz kırpmayı planla
  scheduleNextBlink(): void {
    if (!this.autoMode) return;

    const randomDelay: number = Math.random() * 3000 + 2000;

    this.autoTimeoutId = window.setTimeout(() => {
      this.blink();
      this.scheduleNextBlink();
    }, randomDelay);
  },

  // Başlangıç
  init(): void {
    this.scheduleNextBlink();
  },
};

// Avatar'a tıklayınca göz kırp
const avatar = document.getElementById("avatar") as HTMLElement | null;

avatar?.addEventListener("click", () => {
  avatarController.blink();
});

// Sayfa yüklendiğinde başlat
avatarController.init();
