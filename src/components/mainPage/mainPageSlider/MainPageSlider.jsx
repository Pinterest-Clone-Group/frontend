import React, { Component } from 'react';
import Slider from 'react-slick';

import MainPageImageCardSinglePage from '../mainPageContents/MainPageImageCardSinglePage';

import '../../../slick/slick.css';
import '../../../slick/slick-theme.css';

// import styled from 'styled-components';
// import { Colors } from '../../../styles';

export default class MainPageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <MainPageImageCardSinglePage />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// const MainPageLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
