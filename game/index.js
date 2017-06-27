let frames = 0;
let width = window.innerWidth;
let height = window.innerHeight;

// Three
let renderer = new THREE.WebGLRenderer();
let camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);

camera.position.z = 900;

// Functions
let beforeRender = () => {
    renderer.setSize(width, height)
};

let updateWidthAndHeight = () => {
  window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;

      renderer.setSize(width, height)
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
beforeRender();
animate();