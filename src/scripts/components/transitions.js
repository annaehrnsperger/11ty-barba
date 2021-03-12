import gsap from 'gsap';
import barba from '@barba/core';

export const pageTransition = () => {
  const circleOut = () =>
    gsap.to('.circle', {
      scale: 5,
      duration: 0.9,
    });
    
  const circleIn = () => {
    const circle = document.querySelector('.circle');
    circle.style.transform = 'scale(0)';
  }
  
  const contentOut = () =>
    gsap.to('main', {
      scale: 1.5,
      duration: 0.6,
    });
    
  const contentIn = () =>
    gsap.fromTo('main', {
      scale: 1.3,
    }, {
      scale: 1,
    });


  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          circleOut();
          await contentOut();
          data.current.container.remove();
        },
        async enter() {
          circleIn();
          await contentIn();
        },
      },
    ],
  });
};
