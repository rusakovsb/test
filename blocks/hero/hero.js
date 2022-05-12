gsap.registerPlugin(ScrollTrigger);

gsap.to( ".hero__title-span", {
    duration: 1,
    ease: "expo.out",
    opacity: "1",  
    y: "0",
    stagger: 0.05
});

gsap.to( ".hero__inner", {
    duration: 0.5,
    ease: "none",
    opacity: "1", 
    delay: 0.5
});

gsap.to(".hero__image", {
    ease: "none",
    y: "5vw",     
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.1
    }
});