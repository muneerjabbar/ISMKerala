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