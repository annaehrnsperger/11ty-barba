import {pageTransition} from './components/transitions'

const navItem = document.querySelectorAll('p');

navItem.forEach((item => {
  const xPos = window.innerHeight - item.clientHeight;
	const yPos = window.innerWidth - item.clientWidth;

  item.style.top = `${Math.floor(Math.random() * xPos)}px`;
  item.style.left = `${Math.floor(Math.random() * yPos)}px`;
}));

pageTransition();