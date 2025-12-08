const title = document.createElement("title");
title.textContent = document.querySelector("h1").textContent;
document.head.appendChild(title);

document.head.insertAdjacentHTML("beforeend", `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Times+New+Roman:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap">
<link rel="stylesheet" href="base.css">`
);