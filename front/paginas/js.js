
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const totalItems = items.length;

  let currentIndex = 0;

  function updateCarousel() {
    const width = items[0].clientWidth; // Largura do item
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel); // Ajusta no redimensionamento da tela;
