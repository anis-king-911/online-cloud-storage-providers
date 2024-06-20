const ServicesContainer = document.querySelector('.ServicesContainer');

function Service({ name, logo, link, space }) {
  return `
  <a href="${link}" target="_blank" class="ServiceBox">
    <div class="Cover">
      <img src="${logo}" alt="${name}" />
    </div>
    <div class="Info">
      <span class="ServiceName">${name}</span>
      <!-- <span class="UserEmail"></span> -->
      <span class="UserEmail">userGmail@gmail.com</span>
      <span class="StorageSpace">Given Free Space <mark>${space}</mark></span>
    </div>
  </a>
  `;
}

async function loadSource() {
  const response = await fetch('./source.json');
  const results = await response.json();

  results.map(item => ServicesContainer.innerHTML += Service(item));
}

window.addEventListener('DOMContentLoaded', event => loadSource());