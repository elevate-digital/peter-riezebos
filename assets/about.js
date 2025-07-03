import gsap from 'gsap';

export default function initAbout() {
	// Change body background to white
	gsap.to("body", {
		backgroundColor: "#FFFFFF",
		duration: 1,
		ease: "power3.out",
		scrollTrigger: {
			id: "toWhite",
			trigger: ".about",
			start: "top bottom",
			end: "bottom top",
			toggleActions: "play none none reverse",
		},
	});

	// Fade in each .moment element
	document.querySelectorAll(".moment").forEach((moment) => {
		gsap.from(moment, {
			autoAlpha: 0,
			y: 50,
			duration: 1.25,
			ease: "power4.out",
			scrollTrigger: {
				trigger: moment,
				start: "top 90%",
				toggleActions: "play none none reverse",
			},
		});
	});
}
