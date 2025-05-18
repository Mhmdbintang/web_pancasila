import { companyData } from './model.js';
import { renderHome, renderProducts } from './view.js';

const app = document.getElementById("app");
const navLinks = document.querySelectorAll("nav a");

function setActive(link) {
  navLinks.forEach(l => l.classList.remove("active"));
  link.classList.add("active");
}

function render(page) {
  switch (page) {
    case "products":
      app.innerHTML = renderProducts(companyData);
      break;
    default:
      app.innerHTML = renderHome(companyData);
  }
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    setActive(link);
    render(page);
  });
});

render("home");
