(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function s({title:n,description:i,imgSrc:a,link:o}){const e=document.createElement("div");return e.className=`p-3 bg-amber-100 m-2 
  shadow-[6px_6px_0_0_rgba(0,0,0,0.8)] flex 
  flex-col justify-between min-h-55  transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[10px_10px_0_0_rgba(0,0,0,0.9)]`,e.innerHTML=`
                <div>
                <h1 class="text-2xl">${n}</h1>
                <img src=${a} alt="" />
                <p>
                  ${i}
                </p>
              </div>
    <a
      href="${o}"
      target="_blank"
      class="
        mt-4 inline-block self-start
        bg-amber-950 text-amber-100
        px-5 py-1
        transition-colors duration-300
        hover:bg-amber-700
      "
    >
      Detail
    </a>
  `,e}const c=document.getElementById("resumeBtn"),d=document.querySelector(".menuBtn"),m=document.querySelector(".navMenu"),u=document.querySelector("#projectsGrid");c?.addEventListener("click",()=>{const n=window.open("","_blank");n&&(n.document.write(`
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
        <iframe src="/cv.pdf"></iframe>
      </body>
    </html>
  `),n.document.close())});d?.addEventListener("click",()=>{m?.classList.toggle("hidden")});const l={isBlinking:!1,autoMode:!0,autoTimeoutId:null,elements:{leftEyeOpen:document.getElementById("leftEyeOpen"),rightEyeOpen:document.getElementById("rightEyeOpen"),leftEyeClosed:document.getElementById("leftEyeClosed"),rightEyeClosed:document.getElementById("rightEyeClosed"),autoBtn:document.getElementById("autoBtn")},blink(){this.isBlinking||(this.isBlinking=!0,this.elements.leftEyeOpen.style.display="none",this.elements.rightEyeOpen.style.display="none",this.elements.leftEyeClosed.style.display="block",this.elements.rightEyeClosed.style.display="block",setTimeout(()=>{this.elements.leftEyeOpen.style.display="block",this.elements.rightEyeOpen.style.display="block",this.elements.leftEyeClosed.style.display="none",this.elements.rightEyeClosed.style.display="none",this.isBlinking=!1},150))},scheduleNextBlink(){if(!this.autoMode)return;const n=Math.random()*3e3+2e3;this.autoTimeoutId=window.setTimeout(()=>{this.blink(),this.scheduleNextBlink()},n)},init(){this.scheduleNextBlink()}},h=document.getElementById("avatar");h?.addEventListener("click",()=>{l.blink()});l.init();u?.append(s({title:"To Do List",description:"A to-do list being written in html, css and JavaScript. You can planning your day, taking noteslist the duty you will do for easily. Categorize your lists",imgSrc:"/todo.png",link:"https://github.com/elifaslnn/Lemon-Cake"}),s({title:"Contact Form Mangement System",description:"This project is a Contact Form Management System developed using React.js for the frontend. The main purpose of the project is to allow users to submit contact messages and enable authorized users to manage, read, and analyze these messages through a secure and role-based system.",imgSrc:"/cfms.png",link:"https://github.com/elifaslnn/-Contact-Form-Management-System"}),s({title:"FitLife",description:"FitLife provides users with personalized workout programs, nutrition plans, progress tracking, messaging, and online training content to help them achieve their fitness goals. The system supports three different user roles: Admin, Trainer, and Client.",imgSrc:"/fitLife.jpg",link:"https://github.com/elifaslnn/FitLife-Web-Application"}),s({title:"Seesaw Simulation",description:"This project is a mini web application where users can visually experience physics concepts such as torque, balance, and angle change by adding weights to a seesaw. The application stores the positions of the weights and the angle using localStorage, ensuring the state is preserved even when the page is refreshed.",imgSrc:"/seesaw.png",link:"https://elifaslnn.github.io/elif-aslan-seesaw/"}),s({title:"Lemon Cake",description:"This project was developed as a practice exercise to improve skills in gesture handling, animations, layout measurement, state management, and audio integration within the React Native ecosystem. The player drags and drops various ingredients into a bowl to prepare a lemon cake. The project focuses on combining gestures and animations, which are commonly used in mobile game development.",imgSrc:"/lemoncake.png",link:"https://github.com/elifaslnn/Lemon-Cake"}));
