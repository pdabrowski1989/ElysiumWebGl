let frames = 0;
let width = window.innerWidth;
let height = window.innerHeight;
let updateWidthAndHeight = () => {
  document.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;

      console.log('resize');
  });
};
let showFramePerSecond = () => {
    setInterval(() => {
        let frameContainer = document.getElementById('frames');

        frameContainer.innerHTML = frames;
        frames = 0;
    }, 1000)
};
let animate = () => {
    requestAnimationFrame(animate);
    frames++;
};

updateWidthAndHeight();
showFramePerSecond();
animate();