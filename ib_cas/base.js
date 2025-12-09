
const title = document.createElement("title");
title.textContent = document.querySelector("h1").textContent;
document.head.appendChild(title);

document.head.insertAdjacentHTML("beforeend", `
<link rel="stylesheet" referrerpolicy="no-referrer" href="https://fonts.googleapis.com/css?family=Times+New+Roman|Times+New+Roman:bold">
<link rel="stylesheet" href="base.css">`
);