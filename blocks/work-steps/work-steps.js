gsap.registerPlugin(ScrollTrigger);

gsap.to(".work-steps__item-icon", {
    ease: "none",
    duration: 0.5,
    transform: "rotateY(0deg)",  
    stagger: 0.2,   
    scrollTrigger: {
        trigger: ".work-steps"
    }
});

gsap.to(".work-steps__item-dot", {
    ease: "none",
    opacity: "1",  
    delay: 0.5,
    stagger: 0.1,   
    scrollTrigger: {
        trigger: ".work-steps"
    }
});

gsap.to(".work-steps__item-title", {
    ease: "none",
    duration: 0.5,
    opacity: "1",  
    stagger: 0.2,   
    scrollTrigger: {
        trigger: ".work-steps"
    }
});