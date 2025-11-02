document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 53;  // Adjust to number of images in ./gallery/
  const batchSize = 8;
  let loadedCount = 0;
  let currentIndex = 0;

  const imageList = Array.from({ length: totalImages }, (_, i) => `./gallery/${i + 1}.jpg`);

  // Use correct IDs from your HTML
  const galleryContainer = document.getElementById("photoGallery");
  const loadingIndicator = document.getElementById("loadingIndicator");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!galleryContainer) {
    console.error("Gallery container not found! Check HTML element ID.");
    return;
  }

  // ---- LIGHTBOX ----
  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = imageList[index];
    lightbox.style.display = "flex";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  function navigate(step) {
    currentIndex = (currentIndex + step + imageList.length) % imageList.length;
    lightboxImg.src = imageList[currentIndex];
  }

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", () => navigate(1));
  prevBtn.addEventListener("click", () => navigate(-1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

  // ---- OBSERVERS ----
  const imageObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add("loaded");
        obs.unobserve(img);
      }
    });
  }, { rootMargin: "300px" });

  const sentinel = document.createElement("div");
  sentinel.id = "sentinel";
  galleryContainer.after(sentinel);

  const sentinelObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && loadedCount < totalImages) {
        loadNextBatch();
      }
    });
  });

  // ---- LOAD IMAGES ----
  function loadNextBatch() {
    const nextImages = imageList.slice(loadedCount, loadedCount + batchSize);
    nextImages.forEach((src, i) => {
      const img = document.createElement("img");
      img.dataset.src = src;
      img.alt = `Gallery ${loadedCount + i + 1}`;
      img.loading = "lazy";
      img.addEventListener("click", () => openLightbox(loadedCount + i));
      galleryContainer.appendChild(img);
      imageObserver.observe(img);
    });

    loadedCount += nextImages.length;

    if (loadedCount < totalImages) {
      loadingIndicator.textContent = "Loading more images...";
      sentinelObserver.observe(sentinel);
    } else {
      loadingIndicator.textContent = "All images loaded.";
      sentinelObserver.unobserve(sentinel);
    }
  }

  // ---- INIT ----
  loadNextBatch();
  sentinelObserver.observe(sentinel);
});
