import "./styles/main.css";
import { ProjectCard } from "./components/projectCard";

const cvBtn = document.getElementById("resumeBtn");
const menuBtn = document.querySelector(".menuBtn");
const navMenuList = document.querySelector(".navMenu");

const container = document.querySelector("#projectsGrid");

cvBtn?.addEventListener("click", () => {
  const win = window.open("", "_blank");
  if (!win) return;

  win.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>CV</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe src="cv.pdf"></iframe>
      </body>
    </html>
  `);

  win.document.close();
});

if (navMenuList && menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenuList?.classList.toggle("hidden");
  });

  document.addEventListener("click", (e: MouseEvent) => {
    if (
      !navMenuList.contains(e.target as Node) &&
      !menuBtn.contains(e.target as Node)
    ) {
      navMenuList.classList.add("hidden");
    }
  });
}

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

  scheduleNextBlink(): void {
    if (!this.autoMode) return;

    const randomDelay: number = Math.random() * 3000 + 2000;

    this.autoTimeoutId = window.setTimeout(() => {
      this.blink();
      this.scheduleNextBlink();
    }, randomDelay);
  },

  init(): void {
    this.scheduleNextBlink();
  },
};

const avatar = document.getElementById("avatar") as HTMLElement | null;

avatar?.addEventListener("click", () => {
  avatarController.blink();
});

avatarController.init();

container?.append(
  ProjectCard({
    title: "To Do List",
    description:
      "A to-do list being written in html, css and JavaScript. You can planning your day, taking noteslist the duty you will do for easily. Categorize your lists",
    imgSrc: "todo.png",
    link: "https://github.com/elifaslnn/Lemon-Cake",
  }),
  ProjectCard({
    title: "Contact Form Management System",
    description:
      "This project is a Contact Form Management System developed using React.js for the frontend. The main purpose of the project is to allow users to submit contact messages and enable authorized users to manage, read, and analyze these messages through a secure and role-based system.",
    imgSrc: "cfms.png",
    link: "https://github.com/elifaslnn/-Contact-Form-Management-System",
  }),
  ProjectCard({
    title: "FitLife",
    description:
      "FitLife provides users with personalized workout programs, nutrition plans, progress tracking, messaging, and online training content to help them achieve their fitness goals. The system supports three different user roles: Admin, Trainer, and Client.",
    imgSrc: "fitLife.jpg",
    link: "https://github.com/elifaslnn/FitLife-Web-Application",
  }),
  ProjectCard({
    title: "Seesaw Simulation",
    description:
      "This project is a mini web application where users can visually experience physics concepts such as torque, balance, and angle change by adding weights to a seesaw. The application stores the positions of the weights and the angle using localStorage, ensuring the state is preserved even when the page is refreshed.",
    imgSrc: "seesaw.png",
    link: "https://elifaslnn.github.io/elif-aslan-seesaw/",
  }),
  ProjectCard({
    title: "Lemon Cake",
    description:
      "This project was developed as a practice exercise to improve skills in gesture handling, animations, layout measurement, state management, and audio integration within the React Native ecosystem. The player drags and drops various ingredients into a bowl to prepare a lemon cake. The project focuses on combining gestures and animations, which are commonly used in mobile game development.",
    imgSrc: "lemoncake.png",
    link: "https://github.com/elifaslnn/Lemon-Cake",
  }),
);
