import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imagesContainer = document.querySelector(".images-container");
const titleSpan = document.querySelectorAll(".title span");
const title = document.querySelector(".title");
gsap.registerPlugin(ScrollTrigger, CustomEase);

const loadingIntro = () => {
  gsap.to(imagesContainer, {
    duration: 2,
    opacity: 1,
    translateY: 0,
    ease: CustomEase.create("custom", "M0,0 C0.96,-0.01 0.15,1 1,1 "),
  });

  gsap.to(titleSpan, {
    duration: 2,
    translateY: 0,
    ease: CustomEase.create("custom", "M0,0 C0.96,-0.01 0.15,1 1,1 "),
  });

  const scrollTriggerConfig = (trigger) => {
    return {
      trigger: trigger,
      start: "40% bottom",
      end: "150% bottom",
      scrub: true,
    };
  };

  const scrollTriggerConfigMobile = (trigger) => {
    return {
      trigger: trigger,
      start: "top 50%",
      end: "top 20%",
      scrub: true,
    };
  };


  const scrollTriggerTextConfig = (trigger) => {
    return {
      trigger: trigger,
      start: "40% bottom",
      end: "100% bottom",
      scrub: true,
    };
  };

  if (window.matchMedia("(min-width: 768px)").matches) {
    gsap.to(titleSpan, {
      scrollTrigger: scrollTriggerTextConfig(imagesContainer),
      opacity: 0,
      top: -35 + "vh",
      scaleY: 3,
      transformOrigin: "50% 50%",
    });
  } else {
    gsap.to(titleSpan, {
      scrollTrigger: {
        trigger: imagesContainer,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 0,
      top: -35 + "vh",
      scaleY: 3,
      transformOrigin: "50% 50%",
    });
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
  gsap.to(imagesContainer, {
    scrollTrigger: scrollTriggerConfig(imagesContainer),
    scale: 1.5,
  });
    } else {
        gsap.to(imagesContainer, {
            scrollTrigger: scrollTriggerConfigMobile(imagesContainer),
            scale: 1.2,
        });
    }

  gsap.to(title, {
    scrollTrigger: scrollTriggerTextConfig(imagesContainer),
    
  });
};

export { loadingIntro };
