import "./styles/main.css";

const cvBtn = document.getElementById("cvBtn");

cvBtn?.addEventListener("click", function () {
  console.log("cv");
  var cvWindow = window.open();

  if (!cvWindow) return;

  const pdfFrame = document.createElement("iframe");

  pdfFrame.src = "img/cv.pdf";
  pdfFrame.style = "width: 100%; height: 100%";

  cvWindow.document.body.appendChild(pdfFrame);
});
