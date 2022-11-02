document.addEventListener('DOMContentLoaded', function () {
  const rippleClick = document.querySelectorAll('.ripple');
  const rippleMousemove = document.querySelectorAll('.ripple-mousemove');
  let hover = true;

  function createRipple(btn, e, color) {
    const maskDiv = document.createElement('div');
    const x = e.clientX - btn.offsetLeft;
    const y = e.clientY - btn.offsetTop;
    maskDiv.classList.add('mask');
    maskDiv.style.top = y + 'px';
    maskDiv.style.left = x + 'px';
    if (color) maskDiv.style.background = color;
    btn.appendChild(maskDiv);
    const t = setTimeout(() => {
      maskDiv.remove();
      clearTimeout(t);
    }, 1000);
  }

  if (rippleClick) {
    for (x of rippleClick) {
      x.addEventListener('click', function (event) {
        createRipple(this, event, this.getAttribute('ripple-color'));
      });
    }
  }

  if (rippleMousemove) {
    for (x of rippleMousemove) {
      x.addEventListener('mousemove', function (event) {
        if (hover) {
          hover = false;
          createRipple(this, event, this.getAttribute('ripple-color'));
          setTimeout(() => {
            hover = true;
          }, 100);
        }
      });
    }
  }
});
