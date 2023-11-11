import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to("#chroma", {
  scrollTrigger: {
    trigger: "#heroSection",
    start: "top top",
    scrub: true,
  },
  yPercent: -150,
});
gsap.set("#frfara", { scale: 0 });

gsap.to("#astro", {
  duration: 2,
  bottom: 0,
  delay: 1,
  onComplete: () => {
    tl.to("#frfara", {
      scale: 1,
      rotate: "20deg",
      duration: 1,
    });
  },
});

tl.to("#text", {
  scrollTrigger: {
    trigger: "#heroSection",
    start: "top top",
    scrub: true,
  },
  yPercent: -50,
});

tl.to("#paragraph", {
  scrollTrigger: {
    trigger: "#heroSection",
    start: "top top",
    scrub: true,
  },
  yPercent: -80,
});

// tl.to("#title2", {
//   scrollTrigger: {
//     trigger: "#heroSection",
//     start: "top top",
//     scrub: true,
//   },
//   yPercent: -90,
// });

tl.to("#frfara, #frfara2", {
  scrollTrigger: {
    trigger: "#heroSection",
    start: "top center",
    scrub: true,
  },
  rotate: "280deg",
});

gsap.set(".card-features-one", { yPercent: 150 });

tl.to(".card-features-one", {
  scrollTrigger: {
    trigger: "#about",
    start: "top",
    scrub: 5,
  },
  stagger: 0.1,
  yPercent: 0,

  // ease: "Power2.easeInOut",
});

tl.to("#image1", {
  scrollTrigger: {
    trigger: "#wave",
    start: "top 20%",
    scrub: 2.2,
  },
  xPercent: -30,
});
tl.to("#image2", {
  scrollTrigger: {
    trigger: "#wave",
    start: "top 20%",
    scrub: 2.2,
  },
  xPercent: 50,
  yPercent: 30,
});
tl.to("#image3", {
  scrollTrigger: {
    trigger: "#wave",
    start: "top 20%",
    scrub: 2.2,
  },
  xPercent: 70,
  yPercent: -30,
});

/* COLOR CHANGER */
// const letChange = gsap.timeline({
//     defaults: { duration: 0.5 },
//     paused: true
//   });

//   letChange.to('body', { backgroundColor: 'red' });

//   ScrollTrigger.create({
//     trigger: '',
//     start: 'top 80%',
//     end: 'bottom 40%',
//     animation: letChange,
//     toggleActions: 'play pause resume reverse',
//     onEnter: () => letChange.play(),
//     onLeave: () => letChange.reverse(),
//     onEnterBack: () => letChange.play()
//   });
