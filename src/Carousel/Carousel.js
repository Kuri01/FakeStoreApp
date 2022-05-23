import React from 'react';
import { Carousel } from 'react-bootstrap';
const CarouselContainer = () => {
  return (
    <Carousel style={{ margin: '50px 0px' }}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://cdn.pixabay.com/photo/2022/03/28/14/37/boy-7097685_960_720.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://cdn.pixabay.com/photo/2022/05/16/02/08/women-7199311_960_720.jpg'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://cdn.pixabay.com/photo/2021/05/24/19/34/girl-6280358_960_720.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
