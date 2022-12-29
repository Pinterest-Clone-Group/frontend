import '../styles/home.css';

import { useEffect, useRef, useState } from 'react';

import { Colors } from '../styles';
import Logo from '../components/common/Logo';
import Modal from '../components/common/Modal';
import SignupFormBox from '../components/header/signupModal/SignupFormBox';
import SignupOauthButtonSetBox from '../components/header/signupModal/SignupOauthButtonSetBox';
import child1 from '../assets/images/children/children1.jpg';
import child2 from '../assets/images/children/children2.jpg';
import child3 from '../assets/images/children/children3.jpg';
import child4 from '../assets/images/children/children4.jpg';
import child5 from '../assets/images/children/children5.jpg';
import child6 from '../assets/images/children/children6.jpg';
import child7 from '../assets/images/children/children7.jpg';
import child8 from '../assets/images/children/children8.jpg';
import child9 from '../assets/images/children/children9.jpg';
import food1 from '../assets/images/food/food1.jpg';
import food2 from '../assets/images/food/food2.jpg';
import food3 from '../assets/images/food/food3.jpg';
import food4 from '../assets/images/food/food4.jpg';
import food5 from '../assets/images/food/food5.jpg';
import food6 from '../assets/images/food/food6.jpg';
import food7 from '../assets/images/food/food7.jpg';
import food8 from '../assets/images/food/food8.jpg';
import food9 from '../assets/images/food/food9.jpg';
import home1 from '../assets/images/home/home1.jpg';
import home2 from '../assets/images/home/home2.jpg';
import home3 from '../assets/images/home/home3.jpg';
import home4 from '../assets/images/home/home4.jpg';
import home5 from '../assets/images/home/home5.jpg';
import home6 from '../assets/images/home/home6.jpg';
import home7 from '../assets/images/home/home7.jpg';
import home8 from '../assets/images/home/home8.jpg';
import home9 from '../assets/images/home/home9.jpg';
import look1 from '../assets/images/look/look1.jpg';
import look2 from '../assets/images/look/look2.jpg';
import look3 from '../assets/images/look/look3.jpg';
import look4 from '../assets/images/look/look4.jpg';
import look5 from '../assets/images/look/look5.jpg';
import look6 from '../assets/images/look/look6.jpg';
import look7 from '../assets/images/look/look7.jpg';
import look8 from '../assets/images/look/look8.jpg';
import look9 from '../assets/images/look/look9.jpg';
import styled from 'styled-components';

const Home = () => {
  const [transformYActive, setTransformYActive] = useState(false);
  const [grids, setGrids] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [dots, setDots] = useState([]);
  const [arrowScrollDowns, setArrowScrollDowns] = useState([]);
  const [isLocationBelow, setIsLocationBelow] = useState(false);
  const modalOverlaySignUp = useRef();
  const pageScrollArrowDown = useRef();
  const bodyRef = useRef();
  useEffect(() => {
    setGrids(document.querySelectorAll('.grid'));
    setHeadings(document.querySelectorAll('.heading .wrapper .text'));
    setDots(document.querySelectorAll('.heading .wrapper .dots ul li .dot'));
    setArrowScrollDowns(document.querySelectorAll('.page-scroll-arrow-bottom .arrow-button'));
  }, []);

  function handleMouseWheelEvent(event) {
    const direction = detectMouseWheelDirection(event);
    setIsLocationBelow(direction === 'down' ? true : false);
    console.log(direction);
    moveTransform(direction);
  }

  function detectMouseWheelDirection(event) {
    let delta = null;
    let direction = false;

    if (!event) {
      event = window.event;
    }

    if (event.deltaY) {
      delta = event.deltaY / 60;
    } else if (event.detail) {
      delta = -event.detail / 2;
    }

    if (delta !== null) {
      direction = delta > 0 ? 'down' : 'up';
    }

    return direction;
  }

  function moveTransform(direction) {
    if (direction === 'up' && transformYActive) {
      setTransformYActive(false);
      bodyRef.current.classList.remove('transform-body-bottom');
      pageScrollArrowDown.current.style.display = 'flex';
      modalOverlaySignUp.current.style.display = 'none';
      // footer.style.display = "none";
    } else if (direction === 'down' && !transformYActive) {
      setTransformYActive(true);
      bodyRef.current.classList.add('transform-body-bottom');

      pageScrollArrowDown.current.style.display = 'none';

      setTimeout(() => {
        modalOverlaySignUp.current.style.display = 'block';
        // footer.style.display = "block";
      }, 1100);
    }
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

  const dotsColorsClasses = ['dot-blue', 'dot-green-light', 'dot-yellow', 'dot-green-dark'];

  function enterScreen(index) {
    const arrowScrollDownColorsClasses = [
      'arrow-scroll-down-blue',
      'arrow-scroll-down-green-light',
      'arrow-scroll-down-yellow',
      'arrow-scroll-down-green-dark',
    ];
    const arrowScrollDown = arrowScrollDowns[0];
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

  useEffect(() => {
    if (grids.length && headings.length && arrowScrollDowns.length && dots.length) {
      setupAnimationCycle({
        timePerScreen: 3000, // ms
        exitDelay: 300 * 7, // ms
      });
    }
  }, [grids, headings, arrowScrollDowns, dots]);

  return (
    <div className="body" ref={bodyRef} onWheel={handleMouseWheelEvent}>
      <div className="heading">
        <span className="text" style={{ color: Colors.brand, fontSize: '80px', letterSpacing: '0.14em' }}>
          PINTEREST
        </span>

        <div className="wrapper">
          <div className="offset" style={{ width: '900px' }}>
            <h2 className="text text-blue animate-before">셀럽들을 염탐해요</h2>
          </div>
          <div className="offset" style={{ width: '900px' }}>
            <h2 className="text text-green-light animate-before">현재와 추억을 즐겨요</h2>
          </div>
          <div className="offset" style={{ width: '900px' }}>
            <h2 className="text text-yellow animate-before">색다른 아이디어로 영감을 얻어요</h2>
          </div>
          <div className="offset" style={{ width: '900px' }}>
            <h2 className="text text-green-dark animate-before">부수고 파괴하여 지배자가 되세요</h2>
          </div>

          <div className="dots">
            <ul>
              <li>
                <button className="dot"></button>
              </li>
              <li>
                <button className="dot"></button>
              </li>
              <li>
                <button className="dot"></button>
              </li>
              <li>
                <button className="dot"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid">
          <div className="column animate-before">
            <div className="item">
              <img src={look1} alt="Look 1" />
            </div>
            <div className="item">
              <img src={look2} alt="Look 2" />
            </div>
            <div className="item">
              <img src={look3} alt="Look 3" />
            </div>
            <div className="item">
              <img src={look4} alt="Look 4" />
            </div>
            <div className="item">
              <img src={look5} alt="Look 1" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={look5} alt="Look 5" />
            </div>
            <div className="item">
              <img src={look6} alt="Look 6" />
            </div>
            <div className="item">
              <img src={look7} alt="Look 7" />
            </div>
            <div className="item">
              <img src={look8} alt="Look 8" />
            </div>
            <div className="item">
              <img src={look9} alt="Look 3" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={look9} alt="Look 9" />
            </div>
            <div className="item">
              <img src={look4} alt="Look 4" />
            </div>
            <div className="item">
              <img src={look2} alt="Look 2" />
            </div>
            <div className="item">
              <img src={look1} alt="Look 1" />
            </div>
            <div className="item">
              <img src={look6} alt="Look 6" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={look8} alt="Look 8" />
            </div>
            <div className="item">
              <img src={look4} alt="Look 4" />
            </div>
            <div className="item">
              <img src={look6} alt="Look 6" />
            </div>
            <div className="item">
              <img src={look1} alt="Look 1" />
            </div>
            <div className="item">
              <img src={look4} alt="Look 4" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={look3} alt="Look 3" />
            </div>
            <div className="item">
              <img src={look4} alt="Look 4" />
            </div>
            <div className="item">
              <img src={look1} alt="Look 1" />
            </div>
            <div className="item">
              <img src={look6} alt="Look 6" />
            </div>
            <div className="item">
              <img src={look9} alt="Look 9" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={look9} alt="Look 9" />
            </div>
            <div className="item">
              <img src={look4} alt="Look 4" />
            </div>
            <div className="item">
              <img src={look2} alt="Look 2" />
            </div>
            <div className="item">
              <img src={look1} alt="Look 1" />
            </div>
            <div className="item">
              <img src={look6} alt="Look 6" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={look5} alt="Look 5" />
            </div>
            <div className="item">
              <img src={look6} alt="Look 6" />
            </div>
            <div className="item">
              <img src={look7} alt="Look 7" />
            </div>
            <div className="item">
              <img src={look8} alt="Look 8" />
            </div>
            <div className="item">
              <img src={look3} alt="Look 3" />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <div className="item">
              <img src={child1} alt="Children 1" />
            </div>
            <div className="item">
              <img src={child2} alt="Children 2" />
            </div>
            <div className="item">
              <img src={child3} alt="Children 3" />
            </div>
            <div className="item">
              <img src={child4} alt="Children 4" />
            </div>
            <div className="item">
              <img src={child5} alt="Children 5" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={child6} alt="Children 6" />
            </div>
            <div className="item">
              <img src={child7} alt="Children 7" />
            </div>
            <div className="item">
              <img src={child8} alt="Children 8" />
            </div>
            <div className="item">
              <img src={child9} alt="Children 9" />
            </div>
            <div className="item">
              <img src={child4} alt="Children 4" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={child4} alt="Children 4" />
            </div>
            <div className="item">
              <img src={child3} alt="Children 3" />
            </div>
            <div className="item">
              <img src={child9} alt="Children 9" />
            </div>
            <div className="item">
              <img src={child7} alt="Children 7" />
            </div>
            <div className="item">
              <img src={child6} alt="Children 6" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={child5} alt="Children 5" />
            </div>
            <div className="item">
              <img src={child7} alt="Children 7" />
            </div>
            <div className="item">
              <img src={child6} alt="Children 6" />
            </div>
            <div className="item">
              <img src={child9} alt="Children 9" />
            </div>
            <div className="item">
              <img src={child1} alt="Children 1" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={child9} alt="Children 9" />
            </div>
            <div className="item">
              <img src={child1} alt="Children 1" />
            </div>
            <div className="item">
              <img src={child6} alt="Children 6" />
            </div>
            <div className="item">
              <img src={child7} alt="Children 7" />
            </div>
            <div className="item">
              <img src={child5} alt="Children 5" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={child4} alt="Children 4" />
            </div>
            <div className="item">
              <img src={child3} alt="Children 3" />
            </div>
            <div className="item">
              <img src={child9} alt="Children 9" />
            </div>
            <div className="item">
              <img src={child7} alt="Children 7" />
            </div>
            <div className="item">
              <img src={child6} alt="Children 6" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={child6} alt="Children 6" />
            </div>
            <div className="item">
              <img src={child7} alt="Children 7" />
            </div>
            <div className="item">
              <img src={child8} alt="Children 8" />
            </div>
            <div className="item">
              <img src={child7} alt="Children 7" />
            </div>
            <div className="item">
              <img src={child6} alt="Children 6" />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="column">
            <div className="item">
              <img src={food1} alt="Food 1" />
            </div>
            <div className="item">
              <img src={food2} alt="Food 2" />
            </div>
            <div className="item">
              <img src={food3} alt="Food 3" />
            </div>
            <div className="item">
              <img src={food4} alt="Food 4" />
            </div>
            <div className="item">
              <img src={food1} alt="Food 1" />
            </div>
          </div>
          <div className="column">
            <div className="item">
              <img src={food5} alt="Food 5" />
            </div>
            <div className="item">
              <img src={food6} alt="Food 6" />
            </div>
            <div className="item">
              <img src={food7} alt="Food 7" />
            </div>
            <div className="item">
              <img src={food8} alt="Food 8" />
            </div>
            <div className="item">
              <img src={food3} alt="Food 3" />
            </div>
          </div>
          <div className="column">
            <div className="item">
              <img src={food9} alt="Food 9" />
            </div>
            <div className="item">
              <img src={food4} alt="Food 4" />
            </div>
            <div className="item">
              <img src={food2} alt="Food 2" />
            </div>
            <div className="item">
              <img src={food1} alt="Food 1" />
            </div>
            <div className="item">
              <img src={food6} alt="Food 6" />
            </div>
          </div>
          <div className="column">
            <div className="item">
              <img src={food8} alt="Food 8" />
            </div>
            <div className="item">
              <img src={food4} alt="Food 4" />
            </div>
            <div className="item">
              <img src={food6} alt="Food 6" />
            </div>
            <div className="item">
              <img src={food1} alt="Food 1" />
            </div>
            <div className="item">
              <img src={food4} alt="Food 4" />
            </div>
          </div>
          <div className="column">
            <div className="item">
              <img src={food3} alt="Food 3" />
            </div>
            <div className="item">
              <img src={food4} alt="Food 4" />
            </div>
            <div className="item">
              <img src={food1} alt="Food 1" />
            </div>
            <div className="item">
              <img src={food6} alt="Food 6" />
            </div>
            <div className="item">
              <img src={food9} alt="Food 9" />
            </div>
          </div>
          <div className="column">
            <div className="item">
              <img src={food9} alt="Food 9" />
            </div>
            <div className="item">
              <img src={food4} alt="Food 4" />
            </div>
            <div className="item">
              <img src={food2} alt="Food 2" />
            </div>
            <div className="item">
              <img src={food1} alt="Food 1" />
            </div>
            <div className="item">
              <img src={food6} alt="Food 6" />
            </div>
          </div>
          <div className="column">
            <div className="item">
              <img src={food5} alt="Food 5" />
            </div>
            <div className="item">
              <img src={food6} alt="Food 6" />
            </div>
            <div className="item">
              <img src={food7} alt="Food 7" />
            </div>
            <div className="item">
              <img src={food8} alt="Food 8" />
            </div>
            <div className="item">
              <img src={food3} alt="Food 3" />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <div className="item">
              <img src={home1} alt="Home 1" />
            </div>
            <div className="item">
              <img src={home2} alt="Home 2" />
            </div>
            <div className="item">
              <img src={home3} alt="Home 3" />
            </div>
            <div className="item">
              <img src={home4} alt="Home 4" />
            </div>
            <div className="item">
              <img src={home1} alt="Home 1" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={home5} alt="Home 5" />
            </div>
            <div className="item">
              <img src={home6} alt="Home 6" />
            </div>
            <div className="item">
              <img src={home7} alt="Home 7" />
            </div>
            <div className="item">
              <img src={home8} alt="Home 8" />
            </div>
            <div className="item">
              <img src={home3} alt="Home 3" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={home9} alt="Home 9" />
            </div>
            <div className="item">
              <img src={home4} alt="Home 4" />
            </div>
            <div className="item">
              <img src={home2} alt="Home 2" />
            </div>
            <div className="item">
              <img src={home1} alt="Home 1" />
            </div>
            <div className="item">
              <img src={home6} alt="Home 6" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={home8} alt="Home 8" />
            </div>
            <div className="item">
              <img src={home4} alt="Home 4" />
            </div>
            <div className="item">
              <img src={home6} alt="Home 6" />
            </div>
            <div className="item">
              <img src={home1} alt="Home 1" />
            </div>
            <div className="item">
              <img src={home4} alt="Home 4" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={home3} alt="Home 3" />
            </div>
            <div className="item">
              <img src={home4} alt="Home 4" />
            </div>
            <div className="item">
              <img src={home1} alt="Home 1" />
            </div>
            <div className="item">
              <img src={home6} alt="Home 6" />
            </div>
            <div className="item">
              <img src={home9} alt="Home 9" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={home9} alt="Home 9" />
            </div>
            <div className="item">
              <img src={home4} alt="Home 4" />
            </div>
            <div className="item">
              <img src={home2} alt="Home 2" />
            </div>
            <div className="item">
              <img src={home1} alt="Home 1" />
            </div>
            <div className="item">
              <img src={home6} alt="Home 6" />
            </div>
          </div>
          <div className="column animate-before">
            <div className="item">
              <img src={home5} alt="Home 5" />
            </div>
            <div className="item">
              <img src={home6} alt="Home 6" />
            </div>
            <div className="item">
              <img src={home7} alt="Home 7" />
            </div>
            <div className="item">
              <img src={home8} alt="Home 8" />
            </div>
            <div className="item">
              <img src={home3} alt="Home 3" />
            </div>
          </div>
        </div>
      </div>

      <div ref={pageScrollArrowDown} className="page-scroll-arrow-bottom">
        <button
          className="arrow-button arrow-scroll-down-yellow"
          onClick={() => {
            setIsLocationBelow(true);
            moveTransform('down');
          }}
        >
          <svg className="gUZ erh U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-label="Arrow" role="img">
            <path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
          </svg>
        </button>
      </div>

      <div ref={modalOverlaySignUp} className="modal-overlay">
        <div className="wrapper">
          <button
            className="arrow-up-button"
            onClick={() => {
              setIsLocationBelow(false);
              moveTransform('up');
            }}
          >
            <svg className="gUZ pBj U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-label="Arrow" role="img">
              <path d="M21.75 19.5c-.58 0-1.15-.22-1.59-.65L12 10.79l-8.16 8.06c-.88.87-2.3.87-3.18 0a2.21 2.21 0 0 1 0-3.15L12 4.5l11.34 11.2c.88.87.88 2.28 0 3.15-.44.43-1.01.65-1.59.65"></path>
            </svg>
          </button>

          <div className="container-sign-up">
            <Modal visible={isLocationBelow} width="400" onClose={() => {}}>
              <SignupLayout>
                <Logo />
                <SignupTextBox>
                  <SignupTextTitleBox>Pinterest에 오신 것을 환영합니다</SignupTextTitleBox>
                  <span>시도해 볼 만한 새로운 아이디어 찾기</span>
                </SignupTextBox>
                <SignupFormBox />
                <span>또는</span>
                <SignupOauthButtonSetBox />
              </SignupLayout>
            </Modal>
          </div>
        </div>
      </div>

      <script src="./index.js"></script>
    </div>
  );
};

const SignupLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const SignupTextTitleBox = styled.h1`
  color: rgb(51, 51, 51);
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

export default Home;
