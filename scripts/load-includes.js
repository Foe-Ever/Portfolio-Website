// /scripts/load-includes.js

function loadInclude(id, url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then(html => {
      const container = document.getElementById(id);
      if (container) container.innerHTML = html;
    })
    .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadInclude("header-placeholder", "/components/header.html");
  loadInclude("footer-placeholder", "/components/footer.html");
});
