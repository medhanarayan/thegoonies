// GSAP configuration
gsap.registerPlugin(ScrollTrigger);

// When the window is loaded
window.onload = function() {
    // Define the animation
    gsap.to(".coins_images_1", {
        y: 800, // move down by 200 pixels
        rotation: 270, 
        scrollTrigger: {
            trigger: ".gooniesneversaydie", // the trigger element
            start: "top 80%", // start the animation when the trigger element is 80% in view
            end: "bottom 10%", // end the animation when the trigger element is 20% from leaving the view
            scrub: true, // smooth scrubbing effect
            markers: false // optional: shows markers to help visualize the ScrollTrigger region
        }
        
    });
    gsap.to(".coins_images_3", {
        y: -900, // move down by 200 pixels
        scrollTrigger: {
            trigger: ".gooniesneversaydie", // the trigger element
            start: "top 80%", // start the animation when the trigger element is 80% in view
            end: "bottom 10%", // end the animation when the trigger element is 20% from leaving the view
            scrub: true, // smooth scrubbing effect
            markers: false // optional: shows markers to help visualize the ScrollTrigger region
        }
        
    });
    gsap.to(".coins_images_long", {
        rotation: -30, 
        scrollTrigger: {
            trigger: ".gooniesneversaydie", // the trigger element
            start: "top 80%", // start the animation when the trigger element is 80% in view
            end: "bottom 10%", // end the animation when the trigger element is 20% from leaving the view
            scrub: true, // smooth scrubbing effect
            markers: false// optional: shows markers to help visualize the ScrollTrigger region
        }
        
    });
    gsap.to(".coins_images_2", {
        y:700, // move down by 200 pixels
        rotation: 270, 
        scrollTrigger: {
            trigger: ".gooniesneversaydie", // the trigger element
            start: "top 80%", // start the animation when the trigger element is 80% in view
            end: "bottom 10%", // end the animation when the trigger element is 20% from leaving the view
            scrub: true, // smooth scrubbing effect
            markers: false // optional: shows markers to help visualize the ScrollTrigger region
        }
        
    });
    gsap.to(".coins_images_4", {
        y: -600, // move down by 200 pixels
        rotation: 270, 
        scrollTrigger: {
            trigger: ".gooniesneversaydie", // the trigger element
            start: "top 80%", // start the animation when the trigger element is 80% in view
            end: "bottom 10%", // end the animation when the trigger element is 20% from leaving the view
            scrub: true, // smooth scrubbing effect
            markers: false // optional: shows markers to help visualize the ScrollTrigger region
        }
        
    });
 gsap.to(".title", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".gooniesneversaydie",
            start: "top 80%",  // Adjust as needed
            end: "bottom 20%",  // Adjust as needed
            scrub: true,
            markers: false  // Optional: shows markers to help visualize the ScrollTrigger region
        }
    });

    // Fade out the title when it's about to leave the view
    gsap.to(".title", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".gooniesneversaydie",
            start: "bottom 10%",  // Adjust as needed
            end: "bottom 5%",  // Adjust as needed
            scrub: true,
            markers: false  // Optional: shows markers to help visualize the ScrollTrigger region
        }
    });
    gsap.to('.people_image', {
        y: -200, // move 100px upwards, adjust as needed
        scrollTrigger: {
            trigger: '.skull_image', // adjust the trigger point if needed
            start: 'top center',
            end: 'bottom center',
            scrub: false
        }
    });
    gsap.to('.skull_image', {
        scale: 0.38, 
        scrollTrigger: {
            trigger: '.skull_image',
            start: 'top center',
            end: 'bottom center',
            scrub: false,
        }
    });

    
};

