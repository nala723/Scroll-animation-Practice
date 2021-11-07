import React, { useState, useEffect, useRef } from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Particle() {
  const [wd, setWd] = useState({ scale: 0.0, opacity: 0 });
  // const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const textBoxRef = useRef(null);
  const textRef = useRef(null);
  const textwoRef = useRef(null);
  const finishRef = useRef(null);

  function changeWidth() {
    let scrollVal = window.pageYOffset;
    //  if (scrollVal*0.0001 > 1.0 || scrollVal*0.0001 < 0.0) { return; }
    if (scrollVal > 6000 || scrollVal < 2000) {
      setWd({ scale: 0.0, opacity: 0 });
    } else if (scrollVal < 2800) {
      setWd({ scale: scrollVal * 0.00005, opacity: 0.3 });
    }
    //  if (scrollVal > 5000 || scrollVal < -100) { return; }
    else {
      setWd({ scale: scrollVal * 0.0005, opacity: 1 });
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", changeWidth);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeWidth);
    };
  });
  // let t1 = new TimelineLite({ delay:1});

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: true,
        pin: true
      }
    });

    let tll = gsap.timeline({
      scrollTrigger: {
        trigger: textBoxRef.current,
        scrub: true,
        start: "top bottom-=200px"
      }
    });
    tll.from(textRef.current, { duration: 0.5, opacity: 0 });
    tll.to(textRef.current, { duration: 0.5, opacity: 0 });
    tll.from(textwoRef.current, { duration: 1.5, opacity: 0 });
    return () => tl.scrollTrigger.kill();
  }, []);

  return (
    <Container>
      <Text> HAHA </Text>
      <TextTwo ref={sectionRef}>
        <div ref={textBoxRef}>
          <p ref={textRef}>huhuggagaga Helooo</p>
          <p ref={textwoRef}>ddddddd</p>
        </div>
      </TextTwo>
      <CircleBox ref={finishRef}>
        <Circle
          style={{ transform: `scale(${wd.scale})`, opacity: wd.opacity }}
        >
          {" "}
          <h2>hhh</h2>
          <h2>hhhddd</h2>{" "}
        </Circle>
      </CircleBox>
      <TextThree> huhuhahahahah </TextThree>
      <StyledParticle params={ParticleConfig} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: inherit;
  height: 8000px;
`;
const Text = styled.section`
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: 100vh;
`;
const TextTwo = styled(Text)`
  top: 100vh;

  > div {
    width: 100vw;
    height: 100vh;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > p {
      position: absolute;
      top: 50;
      left: 50;
    }
  }
`;
const CircleBox = styled(Text)`
  top: 200vh;
  /* height: auto; */
`;
const Circle = styled.div`
  position: fixed;
  top: 0;
  height: 1000px;
  width: 1000px;
  border-radius: 100%;
  /* max-height: 100vh;
  min-width: 0%; */
  background-color: white;
  transform: scale(0);
  transition: all 1s ease-out;
  opacity: 0;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextThree = styled(Text)`
  top: 850vh;
  /* background-color: white; */
`;
const StyledParticle = styled(Particles)`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    #000729 0%,
    rgb(255, 188, 188, 0.6) 10%,
    #000729 30% 80%,
    rgb(255, 188, 188, 0.5) 90%,
    #000729 100%
  );
`;
