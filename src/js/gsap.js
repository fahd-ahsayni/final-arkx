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
      rotate: "360deg",
      duration: 1,
      delay: -1,
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
    start: "top top",
    scrub: true,
  },
  rotate: "180deg",
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
    start: "top 20%",
    scrub: 2.2,
  },
  xPercent: -30,
});
tl.to("#image2", {
  scrollTrigger: {
    start: "top 20%",
    scrub: 2.2,
  },
  xPercent: 50,
  yPercent: 30,
});
tl.to("#image3", {
  scrollTrigger: {
    start: "top 20%",
    scrub: 2.2,
  },
  xPercent: 100,
  yPercent: -30,
});

gsap.set("#app", {xPercent: -130})

tl.to("#app", {
  scrollTrigger: {
    trigger: "#jobintech",
    start: "top top",
    end: "bottom 40%",
    scrub: true,
  },
  xPercent: 0,
  yPercent: 10
});
/* COLOR CHANGER */

  const letChange = gsap.timeline({
    defaults: { duration: 0.5 },
    paused: true
  });

  const bgGreen = letChange.to('body', { backgroundColor: '#0e1504'});

  ScrollTrigger.create({
    trigger: '#jobintechxArkx',
    start: 'top 50%',
    end: 'bottom 40%',
    animation: bgGreen,
    toggleActions: 'play pause resume reverse',
    onEnter: () => bgGreen.play(),
    onLeave: () => bgGreen.reverse(),
    onEnterBack: () => bgGreen.play()
  });
