// 模拟轮播图切换
document.addEventListener('DOMContentLoaded', function () {
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateDots();
    });
  });

  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  // 自动轮播 (可选)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateDots();
  }, 3000);
});