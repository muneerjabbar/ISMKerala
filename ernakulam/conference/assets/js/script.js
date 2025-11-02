  function playLive() {
    const container = document.getElementById('liveContainer');
    container.innerHTML = `
      <iframe width="100%" height="450" class="pro-iframe"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        src="https://www.youtube.com/embed/WotzyrlhHL0?rel=0&showinfo=0&autoplay=1">
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

  // Configurable values
  const totalImages = 5; // Adjust for your count
  const batchSize = 3; // Load 1 thumbnail per scroll
  let loadedCount = 0;
  let allImages = [];
  let currentIndex = 0;

  // Pre-generate all image paths
  const imageList = Array.from({ length: totalImages }, (_, i) => `./gallery/${i + 1}.jpg`);

  // Load next batch when needed
  function loadNextBatch() {
    const nextImages = imageList.slice(loadedCount, loadedCount + batchSize);
    nextImages.forEach((src, index) => {
      const img = document.createElement("img");
      img.dataset.src = src;
      img.alt = `Gallery ${loadedCount + index + 1}`;
      img.loading = "lazy";
      img.addEventListener("click", () => openLightbox(loadedCount + index));
      galleryContainer.appendChild(img);
      observer.observe(img);
    });
    loadedCount += nextImages.length;
    if (loadedCount >= totalImages) {
      loadingIndicator.textContent = "All images loaded.";
    }
  }

  // Lazy-load actual image when visible
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        obs.unobserve(img);
      }
    });
  }, { rootMargin: "300px" });

  // Load first batch
  loadNextBatch();

  // Infinite scroll logic
  const scrollObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && loadedCount < totalImages) {
      loadNextBatch();
    }
  }, { rootMargin: "1000px" });
  scrollObserver.observe(loadingIndicator);

  // ====== LIGHTBOX ======
  function openLightbox(index) {
    allImages = Array.from(galleryContainer.querySelectorAll("img"));
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = allImages[currentIndex].dataset.src;
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % allImages.length;
    lightboxImg.src = allImages[currentIndex].dataset.src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    lightboxImg.src = allImages[currentIndex].dataset.src;
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