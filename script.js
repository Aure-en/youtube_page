let description = document.querySelector(".description__content");

function hideOverflow(element, length) {
  if (element.innerHTML.length > length) {
        element.setAttribute("data-content", element.innerHTML);
        element.innerHTML = element.innerHTML.slice(0, length) + '…';
  }
}

document.querySelectorAll(".recommendations__title").forEach( (element) => hideOverflow(element, 50));
document.querySelectorAll(".comments__content").forEach( (comment) => hideOverflow(comment, 129));

hideOverflow(description, 150);
description.innerHTML = description.innerHTML.slice(0, description.innerHTML.length - 1);