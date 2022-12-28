function loadExternalJS() {
  const grids = document.querySelectorAll('.grid');
  const headings = document.querySelectorAll('.heading .wrapper .text');
  const dots = document.querySelectorAll('.heading .wrapper .dots ul li .dot');
  const arrowScrollDowns = document.querySelectorAll('.page-scroll-arrow-bottom .arrow-button');

  const pageScrollArrowDown = document.querySelector('.page-scroll-arrow-bottom');
  const modalOverlaySignUp = document.querySelector('.modal-overlay');
  const footer = document.querySelector('footer');

  const arrowScrollDown = arrowScrollDowns[0];

  const dotsColorsClasses = ['dot-blue', 'dot-green-light', 'dot-yellow', 'dot-green-dark'];

  const arrowScrollDownColorsClasses = [
    'arrow-scroll-down-blue',
    'arrow-scroll-down-green-light',
    'arrow-scroll-down-yellow',
    'arrow-scroll-down-green-dark',
  ];

  function enterScreen(index) {
    const grid = grids[index];
    const heading = headings[index];
    const dot = dots[index];
    const gridColumns = grid.querySelectorAll('.column');

    grid.classList.add('active');

    gridColumns.forEach((element) => {
      element.classList.remove('animate-before', 'animate-after');
    });

    heading.classList.remove('animate-before', 'animate-after');

    dot.classList.add(dotsColorsClasses[index]);

    arrowScrollDown.classList.remove(
      'arrow-scroll-down-blue',
      'arrow-scroll-down-green-light',
      'arrow-scroll-down-yellow',
      'arrow-scroll-down-green-dark',
    );
    arrowScrollDown.classList.add(arrowScrollDownColorsClasses[index]);
  }

  function exitScreen(index, exitDelay) {
    const grid = grids[index];
    const heading = headings[index];
    const dot = dots[index];
    const gridColumns = grid.querySelectorAll('.column');

    gridColumns.forEach((element) => {
      element.classList.add('animate-after');
    });

    heading.classList.add('animate-after');

    dot.classList.remove('dot-blue', 'dot-green-light', 'dot-yellow', 'dot-green-dark');

    setTimeout(() => {
      grid.classList.remove('active');

      heading.classList.add('animate-before');
      heading.classList.remove('animate-after');

      gridColumns.forEach((element) => {
        element.classList.add('animate-before');
        element.classList.remove('animate-after');
      });
    }, exitDelay);
  }

  function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0;

    function nextCycle() {
      const currentIndex = nextIndex;

      enterScreen(currentIndex);

      setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

      nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
    }

    setTimeout(() => {
      nextCycle();
      setInterval(nextCycle, cycleTime);
    }, 500);
  }

  setupAnimationCycle({
    timePerScreen: 3000, // ms
    exitDelay: 300 * 7, // ms
  });

  function detectMouseWheelDirection(event) {
    let delta = null;
    let direction = false;

    if (!event) {
      event = window.event;
    }

    if (event.wheelDelta) {
      delta = event.wheelDelta / 60;
    } else if (event.detail) {
      delta = -event.detail / 2;
    }

    if (delta !== null) {
      direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
  }

  let transformYActive = false;

  function moveTransform(direction) {
    if (direction === 'up' && transformYActive) {
      transformYActive = false;
      document.getElementsByTagName('body')[0].classList.remove('transform-body-bottom');

      pageScrollArrowDown.style.display = 'flex';
      modalOverlaySignUp.style.display = 'none';
      footer.style.display = 'none';
    } else if (direction === 'down' && !transformYActive) {
      transformYActive = true;
      document.getElementsByTagName('body')[0].classList.add('transform-body-bottom');

      pageScrollArrowDown.style.display = 'none';

      setTimeout(() => {
        modalOverlaySignUp.style.display = 'block';
        footer.style.display = 'block';
      }, 1100);
    }
  }

  // eslint-disable-next-line
  function mouseWheelEvent(event) {
    const direction = detectMouseWheelDirection(event);
    moveTransform(direction);
  }
}

export default loadExternalJS;
