const emojis = ['🍓'];
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
function createOverlay() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = 9999;
  document.body.appendChild(overlay);
}
function createEmoji() {
  const emoji = document.createElement('span');
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.innerHTML = randomEmoji;
  emoji.style.position = 'fixed';
  emoji.style.left = Math.random() * screenWidth + 'px';
  emoji.style.top = Math.random() * screenHeight + 'px';
  emoji.style.opacity = 1;
  emoji.style.fontSize = '12px';
  emoji.style.pointerEvents = 'none';
  emoji.style.userSelect = 'none';
  emoji.style.zIndex = 10000;
  document.body.appendChild(emoji);
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 100 + 50;
  const offsetX = Math.cos(angle) * distance;
  const offsetY = Math.sin(angle) * distance;
  emoji.animate(
    [
      { transform: `translate(0, 0)`, opacity: 1 },
      { transform: `translate(${offsetX}px, ${offsetY}px)`, opacity: 0 },
    ],
    {
      duration: 2000,
      easing: 'linear',
      fill: 'forwards',
    }
  );
  emoji.addEventListener('animationend', () => {
    document.body.removeChild(emoji);
  });
}
setInterval(createEmoji, 100);
createOverlay();
