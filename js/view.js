export function renderHome(data) {
  return `
<!-- Section: Tentang Kami -->
<section class="py-5" style="background: linear-gradient(135deg, #E6002D, #E6002D);">
  <div class="container">
    <div class="card border-0 p-4 shadow rounded-4">
      <img src="pic/header.png" alt="Header Image"
     class="img-fluid w-100 h-auto object-fit-cover rounded-4 mb-4 shadow-sm" />

      <h1 class="text-danger fw-bold display-5">${data.name}</h1>
      <p class="mt-3">${data.description}</p>
    </div>
  </div>
</section>

<!-- Section: Visi -->
<section class="py-5" style="background: linear-gradient(135deg, #E6002D, #E6002D);">
  <div class="container">
    <div class="card border-0 p-4 shadow rounded-4">
      <h2 class="text-danger fw-bold mb-3">🎯 Visi Kami</h2>
      <p class="lead">${data.vision}</p>
    </div>
  </div>
</section>

<!-- Section: Misi -->
<section class="py-5" style="background: linear-gradient(135deg, #E6002D, #E6002D);">
  <div class="container">
    <div class="card border-0 p-4 shadow rounded-4">
      <h2 class="text-danger fw-bold mb-3">🚀 Misi Kami</h2>
      <ul class="list-group list-group-flush">
        ${data.mission.map(item => `
          <li class="list-group-item bg-transparent border-0 d-flex align-items-center">
            <span class="me-2">✅</span> ${item}
          </li>
        `).join('')}
      </ul>
    </div>
  </div>
</section>

<!-- Section: Kontak -->
<section class="py-5" style="background: linear-gradient(135deg, #E6002D, #E6002D);">
  <div class="container">
    <div class="card border-0 p-4 shadow rounded-4">
      <h2 class="text-danger fw-bold mb-3">📍 Kontak Kami</h2>
      <p><strong>Alamat:</strong>Jl. Ikhwan Ridwan Rais, Tanjungrejo, Sukun, Tanjungrejo, Malang (dekat pasar mergan)</p>
      <p><strong>Telepon:</strong>+62 821-3183-3260</p>

      <!-- Google Maps Embed -->
      <div class="ratio ratio-16x9 mt-4 rounded-4 overflow-hidden shadow">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1497431695852!2d112.61318647358392!3d-7.9834672796029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883de3fe72c71%3A0xec6a89b88011c707!2sAi-Cha%20IR%20Rais!5e0!3m2!1sid!2sid!4v1747562275926!5m2!1sid!2sid" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</section>

`;
}


export function renderProducts(data) {
  const categories = ["Ai-Shake", "Milk Tea", "Real Fruit Tea", "Smoothies", "Sund-ai"];
  const renderCategorySection = (category) => {
  const filtered = data.products.filter(p => p.category === category);


  if (filtered.length === 0) return '';

  return `
    <section class="mb-5">
      <h2 class="mb-4 text-white">${category}</h2>
      <div class="row">
        ${filtered.map(p => `
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow">
              <img src="${p.image}" class="card-img-top" alt="${p.name}">
              <div class="card-body">
                <h5 class="card-title text-center">${p.name}</h5>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};


  // Gabungkan semua section
  return categories.map(renderCategorySection).join('');
}

