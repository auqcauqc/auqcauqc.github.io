
const title = document.createElement("title");
title.textContent = document.querySelector("h1").textContent;
document.head.appendChild(title);

document.head.insertAdjacentHTML("beforeend", `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Times+New+Roman|Times+New+Roman:700&display=swap">
<link rel="stylesheet" href="base.css">`
);