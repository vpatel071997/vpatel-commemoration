import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Header from "../components/header";
import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.from(".line span", 1.8, {
    y: 500,
    opacity: 0,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to(".overlay-top", 1.6, {
      x: "50vw",
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".overlay-top", .6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" }
    })
    .to(".header", 1.6, {
      y: "0",
      ease: "expo.inOut",
      stagger: 0.4
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      opacity: 0,
      ease: "expo.inOut",
      delay: -1,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    })
    .from(".btn-row", 1.6, {
      scale: 1.4,
      opacity: 0,
      ease: "expo.inOut",
      delay: -1,
      stagger: {
        amount: 0.4
      }
    })
};

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width, dimensions.height]);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Header />
      <Banner />
    </>
  );
};

export default Home;
