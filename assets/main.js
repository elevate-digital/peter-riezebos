import gsap from 'gsap';
import Lenis from 'lenis';
import initAbout from './about.js';
import initHero from './hero.js';
import { initProjects } from './projects.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scroll
const initializeLenisSmoothScroll = () => {
	const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
	});
	
	  function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	  }
	
	  requestAnimationFrame(raf);
}

window.addEventListener('DOMContentLoaded', () => {

	// Normalize scroll for better mobile performance
	ScrollTrigger.normalizeScroll(true);


	initializeLenisSmoothScroll();

	// Initialize hero
	initHero();	

	// Initialize about
	initAbout();	

	// Initialize projects
	initProjects();
})

