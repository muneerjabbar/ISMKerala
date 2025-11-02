  function playLive() {
    const container = document.getElementById('liveContainer');
    container.innerHTML = `
      <iframe width="100%" height="450" class="pro-iframe"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        src="https://www.youtube.com/embed/5AihsUz6Jds?autoplay=1">
      </iframe>
    `;
  }

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("photoGallery");
  const loadingIndicator = document.getElementById("loadingIndicator");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;
  let images = [];
  
  // ⚙️ Specify total images or dynamically generate if needed
  const totalImages = 5; // adjust to your actual image count
  const imageList = Array.from({ length: totalImages }, (_, i) => `./gallery/${i + 1}.jpg`);

  // Create placeholder thumbnails with lazy loading
  imageList.forEach((src, index) => {
    const img = document.createElement("img");
    img.dataset.src = src; // lazy load source
    img.alt = `Gallery ${index + 1}`;
    img.loading = "lazy";
    img.addEventListener("click", () => openLightbox(index));
    galleryContainer.appendChild(img);
  });

  images = document.querySelectorAll(".gallery-grid img");

  // ====== Lazy Loading with IntersectionObserver ======
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: "200px"
  });

  images.forEach(img => observer.observe(img));

  loadingIndicator.style.display = "none";

  // ====== LIGHTBOX FUNCTIONS ======
  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].dataset.src;
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].dataset.src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].dataset.src;
  }

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    }
  });
});