// Interactive JavaScript for Drag/Hover Comparison Slider
const compBox = document.getElementById('comparison-box');
const beforeWrapper = document.getElementById('before-wrapper');
const sliderHandle = document.getElementById('slider-handle');

if (compBox && beforeWrapper && sliderHandle) {
  let isDragging = false;

  function updateSlider(xPos) {
    const rect = compBox.getBoundingClientRect();
    let offsetX = xPos - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    beforeWrapper.style.width = percentage + '%';
    sliderHandle.style.left = percentage + '%';
  }

  compBox.addEventListener('mousemove', (e) => {
    updateSlider(e.clientX);
  });

  compBox.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      updateSlider(e.touches[0].clientX);
    }
  });
}
