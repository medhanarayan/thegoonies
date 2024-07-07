gsap.registerPlugin(ScrollTrigger);

gsap.to(".dot", {
    x: 0,
    opacity:1,
    scrollTrigger: {
        trigger: ".textbox-container", // the trigger element
        start: "top 80%", // start the animation when the trigger element is 80% in view
        end: "bottom 10%", // end the animation when the trigger element is 20% from leaving the view
        scrub: true, // smooth scrubbing effect
        markers: false, // optional: shows markers to help visualize the ScrollTrigger region
        ease: "power3.out",
    }
});
// First animation
gsap.to(".dot", {
    x: 330,
    scrollTrigger: {
        trigger: ".characters-container",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});

// Second animation
gsap.fromTo(".dot", {
    x: 330,
}, {
    x: 700, // Move it an additional 330px
    scrollTrigger: {
        trigger: ".creditbox",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});
gsap.fromTo(".dot", {
    x: 700,
}, {
    x: 1060, // Move it an additional 330px
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
        ease: "power3.out",
    }
});


